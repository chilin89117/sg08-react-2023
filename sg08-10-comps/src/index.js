import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {NavProvider} from './context/navCtx.js'
import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <NavProvider>
      <App />
    </NavProvider>
  </StrictMode>
)
