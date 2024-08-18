import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import supabaseLogo from '/supabase-logo-icon.svg'

import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <h1><a href="${import.meta.env.VITE_SUPABASE_STUDIO_URL}/project/default/editor">
  Supabase Studio
  </a></h1>

    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <a href="https://www.supabase.io  /" target="_blank">
      <img src="${supabaseLogo}" class="logo vanilla" alt="Supabase logo" />
    </a>
    <h1>Vite + TypeScript + Supabase</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
