import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import * as styles from '../dist2/style.css?raw'

export function createDeex() {
  const host = window.document.createElement('div')
  const shadowRoot = host.attachShadow({ mode: "open" });
  const root = document.createElement("span");
  host.id = 'deex-root'

  const style = document.createElement('style')
  console.log(styles)
  style.innerHTML = styles.default

  shadowRoot.appendChild(root);
  shadowRoot.appendChild(style);
  window.document.body.appendChild(host)

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
