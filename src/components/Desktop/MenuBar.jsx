import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function MenuBar({ dark, onToggleTheme }) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('en-US', {
      hour: '2-digit', minute: '2-digit'
    }))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-8 mac-menubar flex items-center justify-between px-5">
      <span className="font-os text-xs tracking-widest" style={{ color: 'var(--mac-window-text)' }}>
        morgan.dev
      </span>
      <div className="flex items-center gap-4">
        <span className="font-os text-xs" style={{ color: 'var(--mac-muted)' }}>M-iTech · Twente</span>
        <span className="font-os text-xs" style={{ color: 'var(--mac-window-text)' }}>{time}</span>
        <button
          onClick={onToggleTheme}
          className="p-1 rounded-md transition-colors hover:opacity-70"
          style={{ color: 'var(--mac-window-text)' }}
        >
          {dark ? <Sun size={13} strokeWidth={1.5} /> : <Moon size={13} strokeWidth={1.5} />}
        </button>
      </div>
    </div>
  )
}