import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HolaBot from './HolaBot'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HolaBot />
  </StrictMode>,
)
