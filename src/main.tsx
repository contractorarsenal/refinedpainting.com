import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

const rootEl = document.getElementById('root')!

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Prerendered production pages ship real markup inside #root, so hydrateRoot
// attaches to it without a remount/flash. The Vite dev server (and any path
// that somehow reaches this with an empty root) has nothing to hydrate —
// hydrateRoot there would log a hydration-mismatch error for no reason, so
// fall back to a plain client render in that case.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app)
} else {
  createRoot(rootEl).render(app)
}
