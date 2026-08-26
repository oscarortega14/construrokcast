import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/base.css' // primero: los estilos por sección deben poder sobreescribirlo
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
