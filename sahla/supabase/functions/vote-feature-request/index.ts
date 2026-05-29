// supabase/functions/vote-feature-request/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight options request
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )

    const { data: { user } } = await supabaseClient.auth.getUser()
    if (!user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const { requestId } = await req.json()
    if (!requestId) {
      return new Response(JSON.stringify({ error: 'Missing requestId' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Attempt to insert the vote object.
    // We rely on the Supabase trigger created in migrations to auto-increment the `votes` column on feature_requests
    const { error: insertError } = await supabaseClient
      .from('feature_request_votes')
      .insert([{ feature_request_id: requestId, user_id: user.id }])
      
    if (insertError) {
      if (insertError.code === '23505') { // postgres unique violation
         return new Response(JSON.stringify({ error: 'Already voted' }), {
           status: 409,
           headers: { ...corsHeaders, 'Content-Type': 'application/json' },
         })
      }
      throw insertError
    }

    // Get the new count to inform the frontend (optional, as frontend already does optimistic updates combined with realtime)
    const { data: featureReq } = await supabaseClient
      .from('feature_requests')
      .select('votes')
      .eq('id', requestId)
      .single()

    return new Response(JSON.stringify({ votes: featureReq?.votes }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
