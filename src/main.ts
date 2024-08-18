import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import supabaseLogo from '/supabase-logo-icon.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <a href="${import.meta.env.VITE_SUPABASE_STUDIO_URL}/project/default/editor" target="_blank">
      <img src="${supabaseLogo}" class="logo vanilla" alt="Supabase logo" />
    </a>
    <h1>Vite + TypeScript + Supabase</h1>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more or click on 
      the Supabase Logo to go to Local Supabase Studio
  </div>
`