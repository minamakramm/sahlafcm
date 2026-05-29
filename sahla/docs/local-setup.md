# Local Development Setup

To begin hacking efficiently on Sahla independently follow these exact bounds:

## 1. Environment Config
Ensure you duplicate `.env.example` -> `.env.local` configuring:
- `VITE_SUPABASE_URL` 
- `VITE_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (Exclusive to scripts like `setup-supabase.js` purely locally. Do not ship this locally!)

## 2. Bootstrapping Defaults
Start by tracking node bounds manually running setup scripts mapping database conditions:
```bash
npm install
node scripts/setup-supabase.js 
```
This tests for table integrity and forces dummy admin injections returning safe outputs.

## 3. Local Hosting
Initiate the Vite server directly executing components mapping dynamically:
```bash
npm run dev
```

## 4. Testing
Confirm component logic integrity with native Vitest tests:
```bash
npm run test
```
