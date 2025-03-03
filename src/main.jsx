import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HolaBot from './HolaBot'
import './index.css'
import { AnimProvider } from './context/AnimContext'

function App () {
  return <AnimProvider>
    <HolaBot />
  </AnimProvider>
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
