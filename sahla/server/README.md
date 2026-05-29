# Sahla Push Notification Broker Backend ⚡

A high-fidelity Node.js Express server designed to run securely on **Railway**. It acts as a real-time broker: listening for new rows in the Supabase `notifications` table using WebSockets, resolving the relevant student device tokens, and dispatching native push notifications via the Firebase Cloud Messaging (FCM) v1 Admin SDK.

It also serves a premium glassmorphic **Live Control Panel & Stats Dashboard** showing device adoption ratios, departmental statistics, server diagnostics, and real-time push logs.

---

## Features

- **Zero-Setup Real-Time Engine**: Subscribes to PostgreSQL database updates via Supabase Realtime WebSockets. No database triggers or complex webhook routing to configure.
- **Dynamic Firebase Admin Loader**: Securely initializes using either individual environment variables or a stringified service account JSON.
- **Visual Analytics Dashboard**: A premium, mobile-responsive HTML/CSS control panel hosted at `/` displaying:
  - User and active FCM token adoption counts.
  - Departmental opt-in percentages.
  - Runtime metrics (CPU heap memory, active port, server uptime).
  - Ring-buffered push delivery logs with success/failure feedback.
- **Prune Pipeline**: Automatically detects expired, unregistered, or invalid student device tokens returned by FCM and prunes them from the database to keep the registry clean.
- **Protected Manual Dispatch Endpoint**: A `POST /api/dispatch` endpoint secured by an API key header for manual push tests.

---

## 🚀 Setup & Local Verification

Before deploying to Railway, you can easily verify the backend locally.

### 1. Install Dependencies
Navigate to the `server/` directory and install the packages:
```bash
cd server
npm install
```

### 2. Configure Local Settings
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Open `.env` and fill in the following configurations:
1. `SUPABASE_URL`: `https://bfsqamfiaohattxrxfdl.supabase.co`
2. `SUPABASE_SERVICE_ROLE_KEY`: Get this from your Supabase Dashboard under *Settings → API → service_role key*. (Warning: This key is extremely sensitive, keep it safe!).
3. **Firebase Credentials**: 
   - Go to your [Firebase Console](https://console.firebase.google.com/).
   - Click the gear icon next to "Project Overview" and choose **Project Settings**.
   - Navigate to **Service Accounts**.
   - Click **Generate New Private Key**. This downloads a JSON file containing your service account credentials.
   - Open this JSON file and copy its values:
     - Map `project_id` to `FIREBASE_PROJECT_ID`
     - Map `client_email` to `FIREBASE_CLIENT_EMAIL`
     - Map `private_key` to `FIREBASE_PRIVATE_KEY` (make sure to include the `\n` characters in quotes).
   - *Alternative for local development*: Save the downloaded JSON file directly in the `server/` directory as `firebase-admin-key.json` (this file is already ignored in Git to prevent leaks!).

### 3. Run Locally
Start the server in development mode:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:8080`. You should see the glassmorphic Sahla Control Panel dashboard displaying active database statistics!

---

## ☁ Deploying to Railway

Railway is a premium, modern cloud hosting platform. Since this server is standard Node.js, deployment takes under 2 minutes:

### Step 1: Create a Railway Project
1. Log into [Railway.app](https://railway.app/).
2. Click **New Project** → **Deploy from GitHub repo**.
3. Select your repository containing the codebase.

### Step 2: Configure Subdirectory Builder
Since the backend resides in the `/server` folder of your monorepo, we tell Railway to compile and run from there:
1. In the Railway dashboard, select your newly created service.
2. Go to the **Settings** tab.
3. Scroll down to **General** → **Root Directory**.
4. Set it to `/server` and save. Railway will now automatically look in the `server` folder for your `package.json`, compile it, and start the node process using `npm start`.

### Step 3: Inject Environment Variables
Go to the **Variables** tab of your service on Railway and click **New Variable** (or copy-paste from your local `.env`) to define:
- `SUPABASE_URL` = `https://bfsqamfiaohattxrxfdl.supabase.co`
- `SUPABASE_SERVICE_ROLE_KEY` = *[Your Secret Supabase Service Role Key]*
- `FIREBASE_PROJECT_ID` = `sahla-study`
- `FIREBASE_CLIENT_EMAIL` = *[Your Firebase Service Account Client Email]*
- `FIREBASE_PRIVATE_KEY` = *[Your Firebase Service Account Private Key]* (Ensure it contains the full key with private header and footers)
- `API_SECRET_KEY` = *[Generate a random secret value to secure manual triggers]*

### Step 4: Expose the Web Dashboard
1. Go to the service **Settings** tab on Railway.
2. Scroll to the **Networking** section.
3. Click **Generate Domain**.
4. Railway will create a public URL (e.g., `https://your-service-production.up.railway.app`).
5. Open this URL in any browser to access your live, production **Sahla Control Panel & statistics dashboard**!

---

## ⚡ Verifying Push Delivery

Once deployed:
1. **Interactive Control Panel**: Open your public Railway URL in a browser. Under the *Gateway Checklist*, ensure that the Firebase Admin SDK, Supabase Connection, and Postgres Realtime Listener are all marked with a green **Ready** / **Active** status.
2. **Auto WebSocket Test**:
   - Log into the Sahla website as an Admin.
   - Navigate to the **Notifications Control** page.
   - Create and send a new Notification broadcast.
   - Look at your Railway live dashboard logs. You will instantly see the database insert event captured, resolved to active subscriber device tokens, and dispatched successfully to student devices with a **Delivered** badge!
3. **Manual cURL dispatch test**:
   You can trigger a test push manually to check raw API routing:
   ```bash
   curl -X POST https://your-railway-url.up.railway.app/api/dispatch \
     -H "Authorization: Bearer YOUR_API_SECRET_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "title": "API Test Signal 🚀",
       "message": "Direct broker pipeline verified. High-fidelity push is active.",
       "type": "info",
       "department": "all"
     }'
   ```
