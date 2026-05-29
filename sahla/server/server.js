/**
 * Sahla FCM Push Notification Broker & Control Panel Server
 * Designed for deployment on Railway to automatically handle real-time push dispatches.
 */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');
const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// 1. Initial Setup & Configurations
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// In-memory ring buffer to keep track of recent push notifications and delivery statistics
const MAX_LOGS = 50;
const pushDeliveryLogs = [];
let totalDispatchesAttempted = 0;
let totalPushSuccesses = 0;
let totalPushFailures = 0;

function addDeliveryLog(logEntry) {
  pushDeliveryLogs.unshift({
    timestamp: new Date().toISOString(),
    id: Math.random().toString(36).substring(2, 9),
    ...logEntry
  });
  if (pushDeliveryLogs.length > MAX_LOGS) {
    pushDeliveryLogs.pop();
  }
}

// 2. Firebase Admin SDK Initialization (Multi-Tier Loading)
let firebaseInitialized = false;
let firebaseErrorMsg = '';

try {
  // Tier 1: Check for individual Railway environment variables (Best Practice)
  if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
    console.log('[Firebase] Initializing via individual Env variables...');
    const privateKey = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n');
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: privateKey
      })
    });
    firebaseInitialized = true;
    console.log('[Firebase] SDK successfully initialized via individual variables.');
  } 
  // Tier 2: Check for complete stringified JSON credentials in Environment
  else if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    console.log('[Firebase] Initializing via FIREBASE_SERVICE_ACCOUNT_JSON string...');
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    firebaseInitialized = true;
    console.log('[Firebase] SDK successfully initialized via stringified JSON.');
  } 
  // Tier 3: Local file fallback (firebase-admin-key.json) for development
  else {
    const localKeyPath = path.join(__dirname, 'firebase-admin-key.json');
    if (fs.existsSync(localKeyPath)) {
      console.log('[Firebase] Initializing via local key file...');
      const serviceAccount = require(localKeyPath);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
      firebaseInitialized = true;
      console.log('[Firebase] SDK successfully initialized via local file.');
    } else {
      console.warn('[Firebase] Warning: No Firebase credentials provided. Push notifications will fail.');
      firebaseErrorMsg = 'Missing credentials. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY in environment variables.';
    }
  }
} catch (error) {
  console.error('[Firebase] SDK initialization failed:', error.message);
  firebaseErrorMsg = `Initialization Error: ${error.message}`;
}

// 3. Supabase Client Initialization
const supabaseUrl = process.env.SUPABASE_URL || 'https://bfsqamfiaohattxrxfdl.supabase.co';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
let supabase = null;
let supabaseConnected = false;

if (supabaseServiceRoleKey) {
  try {
    // We use the Service Role key to bypass Row Level Security (RLS) in order to fetch profiles' fcm_tokens securely
    supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    });
    supabaseConnected = true;
    console.log(`[Supabase] Client initialized successfully for ${supabaseUrl}`);
  } catch (error) {
    console.error('[Supabase] Client initialization failed:', error.message);
  }
} else {
  console.warn('[Supabase] Warning: Missing SUPABASE_SERVICE_ROLE_KEY. Unable to fetch device tokens.');
}

// 4. Secure Push Delivery Logic
async function dispatchPushNotification(notification) {
  const { title, message, type, department, target_user_id, id: notifId } = notification;
  console.log(`[Broker] Processing Notification Dispatch (ID: ${notifId}): "${title}"`);
  
  if (!firebaseInitialized) {
    console.error('[Broker] Cannot dispatch: Firebase Admin SDK not initialized.');
    addDeliveryLog({
      notifId,
      title,
      type: type || 'update',
      target: target_user_id ? 'User DM' : (department || 'all'),
      deviceCount: 0,
      successCount: 0,
      failureCount: 0,
      status: 'Failed (Firebase Credentials Missing)',
      error: 'Firebase Admin SDK not initialized.'
    });
    return;
  }

  if (!supabaseConnected) {
    console.error('[Broker] Cannot dispatch: Supabase connection unavailable.');
    addDeliveryLog({
      notifId,
      title,
      type: type || 'update',
      target: target_user_id ? 'User DM' : (department || 'all'),
      deviceCount: 0,
      successCount: 0,
      failureCount: 0,
      status: 'Failed (Supabase Connection Offline)',
      error: 'Supabase client offline.'
    });
    return;
  }

  try {
    let tokens = [];
    let query = supabase.from('profiles').select('fcm_token, full_name, email');

    if (target_user_id) {
      // Direct Message Mode: Select token for specific user
      console.log(`[Broker] Target: Direct Message to user ID ${target_user_id}`);
      query = query.eq('id', target_user_id);
    } else if (department && department !== 'all') {
      // Department Broadcast Mode: Select tokens for academic department
      console.log(`[Broker] Target: Department broadcast to "${department}"`);
      query = query.eq('department', department);
    } else {
      // Global Broadcast Mode
      console.log(`[Broker] Target: Global broadcast to all students`);
    }

    const { data: profiles, error } = await query.not('fcm_token', 'is', null);

    if (error) throw error;

    if (!profiles || profiles.length === 0) {
      console.log('[Broker] No active FCM devices found matching this target scope.');
      addDeliveryLog({
        notifId,
        title,
        type: type || 'update',
        target: target_user_id ? 'User DM' : (department || 'all'),
        deviceCount: 0,
        successCount: 0,
        failureCount: 0,
        status: 'Ignored',
        details: 'No registered devices in scope.'
      });
      return;
    }

    // Extract valid, non-empty device tokens
    tokens = profiles.map(p => p.fcm_token).filter(t => t && t.trim().length > 0);

    // Deduplicate tokens
    tokens = [...new Set(tokens)];

    if (tokens.length === 0) {
      console.log('[Broker] Resolved 0 active tokens.');
      addDeliveryLog({
        notifId,
        title,
        type: type || 'update',
        target: target_user_id ? 'User DM' : (department || 'all'),
        deviceCount: 0,
        successCount: 0,
        failureCount: 0,
        status: 'Ignored',
        details: 'No non-empty device tokens found.'
      });
      return;
    }

    console.log(`[Broker] Dispatched to ${tokens.length} active device token(s). Preparing FCM multicast payload...`);
    
    // Construct the standard FCM dynamic message payload
    const messagePayload = {
      notification: {
        title: title || 'Sahla Study Hub 🎓',
        body: message || 'You have a new academic update.'
      },
      data: {
        tag: 'sahla-alert',
        click_action: 'FLUTTER_NOTIFICATION_CLICK', // standard fallback
        url: target_user_id ? '/notifications' : '/dashboard',
        type: type || 'update',
        id: String(notifId || '')
      },
      tokens: tokens
    };

    totalDispatchesAttempted += tokens.length;

    // Send the message multicast
    const response = await admin.messaging().sendEachForMulticast(messagePayload);
    
    const successCount = response.successCount;
    const failureCount = response.failureCount;
    
    totalPushSuccesses += successCount;
    totalPushFailures += failureCount;

    console.log(`[FCM Response] Success: ${successCount}, Failures: ${failureCount}`);

    // If there are failures, optionally prune invalid/expired tokens from the database to keep registry clean
    if (failureCount > 0) {
      response.responses.forEach((resp, idx) => {
        if (!resp.success) {
          const errorCode = resp.error?.code;
          const errorMsg = resp.error?.message;
          const badToken = tokens[idx];
          
          console.warn(`[FCM Failure] Token at index ${idx} failed with code "${errorCode}": ${errorMsg}`);
          
          // If the token is no longer registered or is invalid, remove it from the DB
          if (errorCode === 'messaging/registration-token-not-registered' || 
              errorCode === 'messaging/invalid-argument') {
            console.log(`[Registry] Pruning expired token: ${badToken.substring(0, 15)}...`);
            supabase
              .from('profiles')
              .update({ fcm_token: null, updated_at: new Date().toISOString() })
              .eq('fcm_token', badToken)
              .then(({ error: pruneError }) => {
                if (pruneError) console.error('[Registry] Error pruning token:', pruneError.message);
                else console.log('[Registry] Expired token successfully pruned from profile.');
              });
          }
        }
      });
    }

    addDeliveryLog({
      notifId,
      title,
      type: type || 'update',
      target: target_user_id ? 'User DM' : (department || 'all'),
      deviceCount: tokens.length,
      successCount,
      failureCount,
      status: failureCount === 0 ? 'Delivered' : (successCount > 0 ? 'Partial Delivery' : 'Delivery Failed')
    });

  } catch (error) {
    console.error('[Broker] Failed to dispatch notifications:', error.message);
    addDeliveryLog({
      notifId,
      title,
      type: type || 'update',
      target: target_user_id ? 'User DM' : (department || 'all'),
      deviceCount: 0,
      successCount: 0,
      failureCount: 0,
      status: 'Error',
      error: error.message
    });
  }
}

// 5. Supabase Realtime Listener Setup
let realtimeSubscribed = false;
let realtimeSubscription = null;

if (supabaseConnected) {
  try {
    console.log('[Supabase] Initializing Realtime Postgres Listener on public.notifications...');
    realtimeSubscription = supabase
      .channel('railway-fcm-broker-channel')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'notifications' },
        (payload) => {
          const newNotif = payload.new;
          console.log('[Realtime] Captured INSERT event in notifications:', newNotif);
          if (newNotif.is_active !== false) {
            dispatchPushNotification(newNotif);
          } else {
            console.log('[Realtime] Notification is marked inactive, skipping push dispatch.');
          }
        }
      )
      .subscribe((status) => {
        console.log(`[Realtime] Subscription status: ${status}`);
        if (status === 'SUBSCRIBED') {
          realtimeSubscribed = true;
          console.log('[Realtime] Secure PostgreSQL realtime listening active.');
        } else if (status === 'CLOSED' || status === 'CHANNEL_ERROR') {
          realtimeSubscribed = false;
        }
      });
  } catch (error) {
    console.error('[Realtime] Failed to initialize subscription:', error.message);
  }
}

// 6. Web App REST Endpoints & Visual Dashboard

// Health check endpoint (for Railway container status)
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: Math.round(process.uptime()),
    timestamp: new Date().toISOString(),
    services: {
      firebase: firebaseInitialized,
      supabase: supabaseConnected,
      realtime: realtimeSubscribed
    }
  });
});

// REST Endpoint to manually dispatch a notification (e.g. from backend triggers, protected by secret key)
app.post('/api/dispatch', async (req, res) => {
  const authHeader = req.headers.authorization;
  const secretKey = req.headers['x-api-secret'];
  
  const expectedSecret = process.env.API_SECRET_KEY;
  const providedSecret = secretKey || (authHeader && authHeader.startsWith('Bearer ') ? authHeader.substring(7) : null);
  
  if (expectedSecret && providedSecret !== expectedSecret) {
    return res.status(401).json({ error: 'Unauthorized: Invalid API Secret Key.' });
  }

  const { title, message, type, department, target_user_id } = req.body;
  if (!title || !message) {
    return res.status(400).json({ error: 'Missing title or message body.' });
  }

  const mockNotif = {
    id: 'api-manual-' + Math.random().toString(36).substring(2, 9),
    title,
    message,
    type: type || 'update',
    department: department || null,
    target_user_id: target_user_id || null,
    created_at: new Date().toISOString()
  };

  // Run dispatch asynchronously to avoid blocking the REST request
  dispatchPushNotification(mockNotif);

  return res.json({
    status: 'enqueued',
    message: 'Manual push request enqueued for dispatch.',
    notification: mockNotif
  });
});

// Beautiful Premium Live Control Panel served at "/"
app.get('/', async (req, res) => {
  let stats = {
    totalUsers: 0,
    fcmTotal: 0,
    optInRatio: '0.0%',
    depts: {}
  };

  if (supabaseConnected) {
    try {
      const { data: profiles, error } = await supabase
        .from('profiles')
        .select('department, fcm_token');
      
      if (!error && profiles) {
        stats.totalUsers = profiles.length;
        stats.fcmTotal = profiles.filter(p => p.fcm_token).length;
        stats.optInRatio = stats.totalUsers > 0 
          ? ((stats.fcmTotal / stats.totalUsers) * 100).toFixed(1) + '%' 
          : '0.0%';

        // Department breakdown
        profiles.forEach(p => {
          const dept = p.department || 'general';
          if (!stats.depts[dept]) stats.depts[dept] = { total: 0, active: 0 };
          stats.depts[dept].total++;
          if (p.fcm_token) stats.depts[dept].active++;
        });
      }
    } catch (e) {
      console.error('[Dashboard] Error querying profiles:', e.message);
    }
  }

  const uptimeDays = Math.floor(process.uptime() / 86400);
  const uptimeHours = Math.floor((process.uptime() % 86400) / 3600);
  const uptimeMinutes = Math.floor((process.uptime() % 3600) / 60);
  const uptimeString = `${uptimeDays}d ${uptimeHours}h ${uptimeMinutes}m`;
  
  const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(1) + ' MB';

  // Dynamic CSS and HTML content
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sahla FCM Control Panel ⚡</title>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800;900&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #030307;
      --panel: rgba(15, 15, 25, 0.4);
      --border: rgba(255, 255, 255, 0.05);
      --accent: #38bdf8;
      --secondary: #a855f7;
      --success: #34d399;
      --error: #f87171;
      --text: #f3f4f6;
      --text-mute: rgba(243, 244, 246, 0.4);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'Outfit', sans-serif;
      min-height: 100vh;
      overflow-x: hidden;
      padding: 3rem 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-image: 
        radial-gradient(circle at 10% 20%, rgba(56, 189, 248, 0.08) 0%, transparent 40%),
        radial-gradient(circle at 90% 80%, rgba(168, 85, 247, 0.08) 0%, transparent 40%);
    }

    .container {
      max-width: 1200px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }

    /* Header styling */
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border);
      padding-bottom: 2rem;
    }

    .brand h1 {
      font-size: 2.5rem;
      font-weight: 900;
      letter-spacing: -0.05em;
      background: linear-gradient(135deg, #fff 30%, var(--accent) 70%, var(--secondary) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .brand p {
      color: var(--text-mute);
      font-size: 0.95rem;
      margin-top: 0.25rem;
      font-weight: 500;
    }

    .status-badge {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(52, 211, 153, 0.05);
      border: 1px solid rgba(52, 211, 153, 0.15);
      color: var(--success);
      padding: 0.5rem 1rem;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 800;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .status-badge .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--success);
      box-shadow: 0 0 12px var(--success);
      animation: pulse 2s infinite;
    }

    /* Stats Grid */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.5rem;
    }

    .card {
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 2rem;
      padding: 2rem;
      backdrop-filter: blur(20px);
      position: relative;
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .card:hover {
      border-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-4px);
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.02), transparent 60%);
      pointer-events: none;
    }

    .card-title {
      font-size: 0.8rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--text-mute);
      margin-bottom: 0.5rem;
    }

    .card-value {
      font-size: 2.25rem;
      font-weight: 900;
      letter-spacing: -0.02em;
      color: #fff;
    }

    .card-subtext {
      font-size: 0.85rem;
      color: var(--text-mute);
      margin-top: 0.5rem;
      font-weight: 500;
    }

    .accent-card {
      border-color: rgba(56, 189, 248, 0.15);
      background: linear-gradient(135deg, rgba(15, 23, 42, 0.4), rgba(56, 189, 248, 0.02));
    }
    
    .accent-card .card-title {
      color: var(--accent);
    }

    .secondary-card {
      border-color: rgba(168, 85, 247, 0.15);
      background: linear-gradient(135deg, rgba(15, 23, 42, 0.4), rgba(168, 85, 247, 0.02));
    }
    
    .secondary-card .card-title {
      color: var(--secondary);
    }

    /* Diagnostics & Details */
    .dashboard-layout {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 1.5rem;
    }

    @media (max-width: 900px) {
      .dashboard-layout {
        grid-template-columns: 1fr;
      }
    }

    .panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .panel-header h2 {
      font-size: 1.25rem;
      font-weight: 800;
      letter-spacing: -0.01em;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    /* Checklist */
    .checklist {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .checklist-item {
      display: flex;
      align-items: center;
      justify-between;
      padding: 1rem;
      border-radius: 1.25rem;
      background: rgba(255, 255, 255, 0.01);
      border: 1px solid rgba(255, 255, 255, 0.02);
    }

    .checklist-label {
      display: flex;
      flex-direction: column;
    }

    .checklist-name {
      font-size: 0.9rem;
      font-weight: 700;
    }

    .checklist-desc {
      font-size: 0.75rem;
      color: var(--text-mute);
      margin-top: 0.1rem;
    }

    .checklist-status {
      font-size: 0.75rem;
      font-weight: 800;
      padding: 0.35rem 0.75rem;
      border-radius: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .status-ok {
      background: rgba(52, 211, 153, 0.1);
      color: var(--success);
      border: 1px solid rgba(52, 211, 153, 0.1);
    }

    .status-err {
      background: rgba(248, 113, 113, 0.1);
      color: var(--error);
      border: 1px solid rgba(248, 113, 113, 0.1);
    }

    /* Logs Table */
    .logs-container {
      max-height: 400px;
      overflow-y: auto;
      border-radius: 1.25rem;
      border: 1px solid rgba(255, 255, 255, 0.03);
    }

    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 0.85rem;
    }

    th, td {
      padding: 1rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.02);
    }

    th {
      background: rgba(255, 255, 255, 0.02);
      font-weight: 800;
      text-transform: uppercase;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      color: var(--text-mute);
      position: sticky;
      top: 0;
    }

    tr:hover td {
      background: rgba(255, 255, 255, 0.01);
    }

    .log-badge {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 800;
      padding: 0.25rem 0.5rem;
      border-radius: 0.5rem;
      text-transform: uppercase;
    }

    .log-success {
      background: rgba(52, 211, 153, 0.1);
      color: var(--success);
    }

    .log-warning {
      background: rgba(168, 85, 247, 0.1);
      color: var(--secondary);
    }

    .log-error {
      background: rgba(248, 113, 113, 0.1);
      color: var(--error);
    }

    .empty-logs {
      padding: 4rem;
      text-align: center;
      color: var(--text-mute);
      font-weight: 500;
      font-size: 0.9rem;
    }

    .log-mono {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: var(--text-mute);
    }

    /* Department progress */
    .dept-progress {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      margin-top: 1rem;
    }

    .progress-bar-container {
      width: 100%;
      height: 8px;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 9999px;
      overflow: hidden;
      margin-top: 0.4rem;
    }

    .progress-bar-fill {
      height: 100%;
      border-radius: 9999px;
      background: linear-gradient(90deg, var(--accent), var(--secondary));
    }

    .dept-info {
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
      font-weight: 700;
    }

    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7); }
      70% { box-shadow: 0 0 0 10px rgba(52, 211, 153, 0); }
      100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="brand">
        <h1>Sahla Push Broker ⚡</h1>
        <p>Real-Time Firebase Push Notification Dispatcher Engine</p>
      </div>
      <div class="status-badge">
        <span class="dot"></span>
        Broker Live
      </div>
    </header>

    <!-- Stats summary grid -->
    <section class="grid">
      <div class="card">
        <p class="card-title">Registry Adoption</p>
        <p class="card-value">${stats.fcmTotal}</p>
        <p class="card-subtext">Active FCM Devices / ${stats.totalUsers} Profiles (${stats.optInRatio})</p>
      </div>
      <div class="card accent-card">
        <p class="card-title">Broadcasting Success</p>
        <p class="card-value">${totalPushSuccesses}</p>
        <p class="card-subtext">Delivered messages to devices successfully</p>
      </div>
      <div class="card secondary-card">
        <p class="card-title">Delivery Failures</p>
        <p class="card-value">${totalPushFailures}</p>
        <p class="card-subtext">Undelivered or pruned stale tokens</p>
      </div>
      <div class="card">
        <p class="card-title">System Metrics</p>
        <p class="card-value">${totalDispatchesAttempted}</p>
        <p class="card-subtext">Total device push attempts enqueued</p>
      </div>
    </section>

    <!-- Main diagnostics and details dashboard -->
    <section class="dashboard-layout">
      <!-- Left side: Log table -->
      <div class="card" style="grid-column: span 1;">
        <div class="panel-header">
          <h2>Active Delivery Logs</h2>
          <span style="font-size: 0.75rem; font-weight:800; color:var(--accent);">REALTIME UDPATES</span>
        </div>
        <div class="logs-container">
          ${pushDeliveryLogs.length === 0 ? `
            <div class="empty-logs">
              No push events captured yet.<br>
              Insert a notification in Supabase or call POST /api/dispatch to trigger.
            </div>
          ` : `
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Target</th>
                  <th>Devices</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${pushDeliveryLogs.map(log => {
                  const date = new Date(log.timestamp);
                  const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
                  let badgeClass = 'log-success';
                  if (log.status.includes('Partial')) badgeClass = 'log-warning';
                  else if (log.status.includes('Failed') || log.status.includes('Error')) badgeClass = 'log-error';
                  
                  return `
                    <tr>
                      <td class="log-mono">${timeStr}</td>
                      <td class="log-mono">${log.id}</td>
                      <td style="font-weight: 700;">${log.title}</td>
                      <td><span class="log-mono" style="font-size:0.75rem;">${log.target}</span></td>
                      <td style="font-weight: 600; font-family:'JetBrains Mono';">${log.deviceCount} (${log.successCount}✔ / ${log.failureCount}✖)</td>
                      <td><span class="log-badge ${badgeClass}">${log.status}</span></td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          `}
        </div>
      </div>

      <!-- Right side: System health / Department progress -->
      <div style="display:flex; flex-direction:column; gap:1.5rem;">
        <!-- Infrastructure check list -->
        <div class="card">
          <div class="panel-header">
            <h2>Gateway Checklist</h2>
          </div>
          <div class="checklist">
            <div class="checklist-item">
              <div class="checklist-label">
                <span class="checklist-name">Firebase Admin SDK</span>
                <span class="checklist-desc">${firebaseInitialized ? 'Connected to sahla-study' : 'Failed to boot SDK'}</span>
              </div>
              <span class="checklist-status ${firebaseInitialized ? 'status-ok' : 'status-err'}">
                ${firebaseInitialized ? 'Ready' : 'Error'}
              </span>
            </div>

            <div class="checklist-item">
              <div class="checklist-label">
                <span class="checklist-name">Supabase Connection</span>
                <span class="checklist-desc">${supabaseConnected ? 'RLS Bypassed (Service Role)' : 'Service Role Key Missing'}</span>
              </div>
              <span class="checklist-status ${supabaseConnected ? 'status-ok' : 'status-err'}">
                ${supabaseConnected ? 'Online' : 'Offline'}
              </span>
            </div>

            <div class="checklist-item">
              <div class="checklist-label">
                <span class="checklist-name">Postgres Realtime Listener</span>
                <span class="checklist-desc">${realtimeSubscribed ? 'Listening on public.notifications' : 'Realtime Subscription Offline'}</span>
              </div>
              <span class="checklist-status ${realtimeSubscribed ? 'status-ok' : 'status-err'}">
                ${realtimeSubscribed ? 'Active' : 'Offline'}
              </span>
            </div>
          </div>
          
          <div style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.8rem; color: var(--text-mute); font-family: 'JetBrains Mono'; border-top: 1px solid var(--border); padding-top: 1rem;">
            <div>Server Uptime : <span style="color:#fff; font-weight:700;">${uptimeString}</span></div>
            <div>Heap Memory   : <span style="color:#fff; font-weight:700;">${memoryUsage}</span></div>
            <div>Active Port   : <span style="color:#fff; font-weight:700;">${PORT}</span></div>
          </div>
        </div>

        <!-- Department breakdown -->
        <div class="card">
          <div class="panel-header">
            <h2>Discipline Opt-In</h2>
          </div>
          <div class="dept-progress">
            ${Object.keys(stats.depts).length === 0 ? `
              <div style="font-size:0.85rem; color:var(--text-mute); font-weight:500; text-align:center; padding:1rem;">
                No opt-in data registered.
              </div>
            ` : Object.entries(stats.depts).map(([dept, data]) => {
              const pct = data.total > 0 ? Math.round((data.active / data.total) * 100) : 0;
              const formattedName = dept.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
              return `
                <div>
                  <div class="dept-info">
                    <span style="color:rgba(255,255,255,0.85);">${formattedName}</span>
                    <span style="font-family:'JetBrains Mono'; font-weight:600; color:var(--accent);">${data.active}/${data.total} (${pct}%)</span>
                  </div>
                  <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${pct}%;"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    </section>
  </div>
</body>
</html>`;

  res.send(html);
});

// 7. Start the Web Server
app.listen(PORT, () => {
  console.log(`\n\x1b[32m✔ Sahla FCM Broker Server is boot-running on http://localhost:${PORT}\x1b[0m`);
  console.log(`\x1b[36m• Uptime Health Endpoint : http://localhost:${PORT}/health\x1b[0m`);
  console.log(`\x1b[36m• Live Stats Dashboard   : http://localhost:${PORT}/\x1b[0m`);
  console.log(`\x1b[36m• REST Manual Dispatch   : POST http://localhost:${PORT}/api/dispatch\x1b[0m\n`);
  
  if (expectedSecret = process.env.API_SECRET_KEY) {
    console.log(`[Security] API Manual Dispatch requires Authorization Bearer token matching: ${expectedSecret.substring(0, 4)}...`);
  }
});
