import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BooksProvider} from './contexts/BooksCtx.jsx'
import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <BooksProvider>
      <App />
    </BooksProvider>
  </StrictMode>
)
