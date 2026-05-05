import { useState, useEffect } from 'react'
import Desktop from './components/Desktop/Desktop'
import MobileHome from './components/Mobile/MobileHome'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return isMobile
}

export default function App() {
  const isMobile = useIsMobile()
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const toggle = () => setDark(d => !d)

  return isMobile
    ? <MobileHome dark={dark} onToggleTheme={toggle} />
    : <Desktop dark={dark} onToggleTheme={toggle} />
}