# Vite + Supabase Seeder Example

A minimal demo showing how to seed Supabase local instances with starter user accounts using `supabase/seed.sql`.

When you spin up Supabase locally, this project will automatically create **10 test users** so you can start developing auth-dependent features immediately — no manual sign-ups needed.

## What it does

- Starts a local Supabase instance via Docker
- Runs a seed script that creates 10 test users (`user1@example.com` through `user10@example.com`)
- Launches a Vite dev server with links to Supabase Studio

## Test users

| Email | Password |
|-------|----------|
| `user1@example.com` | `password123` |
| `user2@example.com` | `password123` |
| ... | ... |
| `user10@example.com` | `password123` |

## Quick start

**Prerequisites:** Docker must be installed and running.

```bash
# Clone the repo
git clone https://github.com/khattaksd/vite-supabase-seeder-example.git
cd vite-supabase-seeder-example

# Install dependencies
pnpm install

# Copy env file
cp .env .env.local

# Start Supabase and dev server
pnpm dev
```

After running `pnpm dev`, copy the **anon key** from the terminal output and add it to `.env.local`:

```
VITE_SUPABASE_ANON_KEY=<your-anon-key>
```

Then restart the dev server.

## Commands

| Command | Description |
|---------|-------------|
| `pnpm supabase-start` | Start local Supabase |
| `pnpm supabase-stop` | Stop Supabase (uses `--no-backup`) |
| `pnpm supabase-status` | Show current Supabase config |
| `pnpm dev` | Start Supabase + Vite dev server |

## Notes

- `pnpm supabase-stop` uses `--no-backup` — see [Supabase docs](https://supabase.com/docs) for details
- The seed script inserts into `auth.users` and `auth.identities` so users are immediately confirmed and ready to sign in