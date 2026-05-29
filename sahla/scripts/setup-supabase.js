const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

async function setupSupabase() {
  const supabaseUrl = process.env.VITE_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceKey) {
    console.error("Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY")
    process.exit(1)
  }

  const supabase = createClient(supabaseUrl, serviceKey)

  console.log('Checking connection...')
  
  // 1. Check profiles exist
  const { error: profileError } = await supabase.from('profiles').select('id').limit(1)
  if (profileError && profileError.code !== 'PGRST116') {
     console.log('Profiles table check missing. Migrations needed.')
  } else {
     console.log('✅ Tables accessible.')
  }

  // 2. Set test admin if dev
  const isStaging = process.env.NODE_ENV === 'development' || !process.env.PROD
  if (isStaging) {
     const adminEmail = 'admin@sahla.test'
     // Check if user exists
     const { data: users } = await supabase.auth.admin.listUsers()
     const adminExists = users?.users?.find(u => u.email === adminEmail)
     
     if (!adminExists) {
        console.log(`Creating test admin ${adminEmail}...`)
        const { data, error } = await supabase.auth.admin.createUser({
           email: adminEmail,
           password: 'password123',
           email_confirm: true
        })
        if (error) console.error(error)
        else {
           // update role
           await supabase.from('profiles').update({ role: 'admin' }).eq('id', data.user.id)
           console.log('✅ Admin test user created.')
        }
     } else {
        console.log('✅ Admin test user already exists.')
     }
  }

  console.log('Setup sequence finished.')
}

setupSupabase()
