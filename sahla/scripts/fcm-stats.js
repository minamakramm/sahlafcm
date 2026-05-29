/**
 * Sahla FCM Push Notification Statistics Tool
 * Run this tool via node to analyze all active FCM push channels.
 */
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.development' })

// If not in .env.development, look for defaults
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://bfsqamfiaohattxrxfdl.supabase.co'
const anonKey = process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !anonKey) {
  console.error('\x1b[31m[Error] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in environment configuration.\x1b[0m')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, anonKey)

async function runStats() {
  console.log('\n\x1b[34;1m┌────────────────────────────────────────────────────────┐\x1b[0m')
  console.log('\x1b[34;1m│            SAHLA CONTROL PANEL — FCM REGISTRY STATISTICS │\x1b[0m')
  console.log('\x1b[34;1m└────────────────────────────────────────────────────────┘\x1b[0m\n')
  
  console.log(`\x1b[36mConnecting to database:\x1b[0m ${supabaseUrl}`)
  
  try {
    const { data: profiles, error } = await supabase
      .from('profiles')
      .select('id, full_name, email, department, role, fcm_token, updated_at')
      .order('updated_at', { ascending: false })
      
    if (error) throw error

    if (!profiles || profiles.length === 0) {
      console.log('\x1b[33m[Warning] No profiles found in the registry.\x1b[0m')
      return
    }

    const total = profiles.length
    const withFcm = profiles.filter(p => p.fcm_token).length
    const percentage = ((withFcm / total) * 100).toFixed(1)

    console.log('\n\x1b[1;37m📊 SYSTEM ADOPTION METRICS\x1b[0m')
    console.log('────────────────────────────────────────────────────────')
    console.log(`  • Total Student & Staff Accounts : \x1b[1;36m${total}\x1b[0m`)
    console.log(`  • Active FCM Push Channels      : \x1b[1;32m${withFcm}\x1b[0m`)
    console.log(`  • Overall Subscription Ratio    : \x1b[1;35m${percentage}%\x1b[0m`)

    // Department Breakdown
    const depts = {}
    profiles.forEach(p => {
      const d = p.department || 'general / staff'
      if (!depts[d]) depts[d] = { total: 0, fcm: 0 }
      depts[d].total++
      if (p.fcm_token) depts[d].fcm++
    })

    console.log('\n\x1b[1;37m🏫 DEPARTMENTAL OPT-IN METRICS\x1b[0m')
    console.log('────────────────────────────────────────────────────────')
    for (const [dept, metrics] of Object.entries(depts)) {
      const deptPercent = ((metrics.fcm / metrics.total) * 100).toFixed(1)
      const progressBar = getProgressBar(metrics.fcm, metrics.total, 15)
      
      const deptNameStr = dept.padEnd(22).substring(0, 22)
      const countStr = `${metrics.fcm}/${metrics.total}`.padStart(7)
      
      console.log(`  • \x1b[33m${deptNameStr}\x1b[0m : \x1b[36m${countStr}\x1b[0m users \x1b[90m${progressBar}\x1b[0m \x1b[1;32m${deptPercent}%\x1b[0m`)
    }

    // Active Subscribers registry
    console.log('\n\x1b[1;37m📱 ACTIVE FCM TOKEN REGISTRY (LAST 10 SUBSCRIBERS)\x1b[0m')
    console.log('────────────────────────────────────────────────────────')
    const activeSubscribers = profiles.filter(p => p.fcm_token).slice(0, 10)
    
    if (activeSubscribers.length === 0) {
      console.log('  \x1b[31mNo active FCM subscribers registered yet.\x1b[0m')
    } else {
      activeSubscribers.forEach((sub, i) => {
        const name = (sub.full_name || 'Anonymous Student').padEnd(20).substring(0, 20)
        const email = (sub.email || 'no-email@sahla.edu').padEnd(25).substring(0, 25)
        const tokenSnippet = `${sub.fcm_token.substring(0, 12)}...${sub.fcm_token.substring(sub.fcm_token.length - 12)}`
        console.log(`  ${i + 1}. \x1b[32m${name}\x1b[0m \x1b[90m|\x1b[0m \x1b[36m${email}\x1b[0m \x1b[90m|\x1b[0m Token: \x1b[35m${tokenSnippet}\x1b[0m`)
      })
    }

    console.log('\n\x1b[1;37m🚀 HOW TO TRIGGER A TEST PUSH NOTIFICATION MANUAL DISPATCH\x1b[0m')
    console.log('────────────────────────────────────────────────────────')
    console.log('  Since FCM requires a secure server credential key to prevent')
    console.log('  unauthorized push broadcasts, you can dispatch a message to')
    console.log('  any specific device using this standard FCM cURL payload:')
    console.log('\n\x1b[33m  curl -X POST -H "Authorization: key=YOUR_FCM_SERVER_KEY" \\')
    console.log('       -H "Content-Type: application/json" \\')
    console.log('       -d \'{')
    console.log('         "to": "TARGET_DEVICE_FCM_TOKEN",')
    console.log('         "notification": {')
    console.log('           "title": "Sahla Alert System ⚡",')
    console.log('           "body": "This is a direct channel connectivity verification signal."')
    console.log('         },')
    console.log('         "data": {')
    console.log('           "tag": "sahla-alert",')
    console.log('           "url": "/notifications"')
    console.log('         }')
    console.log('       }\' https://fcm.googleapis.com/fcm/send\x1b[0m')
    console.log('\n  Replace \x1b[32mTARGET_DEVICE_FCM_TOKEN\x1b[0m with one of the active tokens listed above.')
    console.log('  Replace \x1b[33mYOUR_FCM_SERVER_KEY\x1b[0m with the server key from your Firebase Console')
    console.log('  (Settings -> Cloud Messaging -> Legacy credentials -> Server key).\n')

  } catch (err) {
    console.error('\x1b[31m[Error] Failed to compile registry statistics:\x1b[0m', err.message)
  }
}

function getProgressBar(value, total, width) {
  if (total === 0) return '░'.repeat(width)
  const filledLength = Math.round((value / total) * width)
  const emptyLength = width - filledLength
  return '[' + '█'.repeat(filledLength) + '░'.repeat(emptyLength) + ']'
}

runStats()
