### Local Supabase with a seeder script

1. clone the repo
2. `cd` to project
3. `pnpm install`
3. `cp .env .env.local`
4. `pnpm supabase-start`
5. copy `anon key:<?>` to .env.local `VITE_SUPABASE_ANON_KEY:<?>`
6. `pnpm dev`

---
- _make sure docker is running and accessible_
- `pnpm supabase-stop` _uses_ `--no-backup`. see Supabase docs for details
- `pnpm supabase-status` prints current Supabase config
---
