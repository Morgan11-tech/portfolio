import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import MenuBar from './MenuBar'
import DesktopIcon from './DesktopIcon'
import Window from './Window'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Research from '../sections/Research'
import Lab from '../sections/Lab'
import Stack from '../sections/Stack'
import Contact from '../sections/Contact'
import bg from '../../assets/bg_1.jpg'

const SECTIONS = [
  { id: 'about',    label: '~/about',     type: 'folder', Component: About },
  { id: 'projects', label: '~/projects',  type: 'folder', Component: Projects },
  { id: 'research', label: '~/research',  type: 'folder', Component: Research },
  { id: 'lab',      label: '~/lab',       type: 'folder', Component: Lab },
  { id: 'stack',    label: '~/stack',     type: 'folder', Component: Stack },
  { id: 'contact',  label: 'contact.txt', type: 'txt',    Component: Contact },
]

let zTop = 10

export default function Desktop({ dark, onToggleTheme }) {
  const [windows, setWindows] = useState([])
  const [zMap, setZMap] = useState({})

  const bringToFront = useCallback((id) => {
    zTop++
    setZMap(prev => ({ ...prev, [id]: zTop }))
  }, [])

  const openWindow = useCallback((config) => {
    const { id } = config
    setWindows(prev => {
      if (prev.find(w => w.id === id)) {
        bringToFront(id)
        return prev
      }
      const offset = prev.length * 28
      return [...prev, {
        ...config,
        x: config.x ?? (100 + offset),
        y: config.y ?? (60 + offset),
      }]
    })
    bringToFront(id)
  }, [bringToFront])

  const closeWindow = (id) => setWindows(prev => prev.filter(w => w.id !== id))

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }} />
      <div className="absolute inset-0 bg-black/25" />

      <MenuBar dark={dark} onToggleTheme={onToggleTheme} />

      <div className="absolute top-10 right-5 flex flex-col gap-2 pt-4">
        {SECTIONS.map(s => (
          <DesktopIcon
            key={s.id}
            label={s.label}
            type={s.type}
            onClick={() => openWindow({ id: s.id, label: s.label, Component: s.Component })}
          />
        ))}
        <DesktopIcon label="resume.pdf" type="pdf" onClick={() => window.open('/resume.pdf', '_blank')} />
      </div>

      <AnimatePresence>
        {windows.map(w => {
          const { Component, props = {}, widthClass } = w
          return (
            <Window
              key={w.id}
              title={w.label}
              onClose={() => closeWindow(w.id)}
              zIndex={zMap[w.id] || 10}
              onFocus={() => bringToFront(w.id)}
              initialX={w.x}
              initialY={w.y}
              widthClass={widthClass}
            >
              <Component {...props} onOpenWindow={openWindow} />
            </Window>
          )
        })}
      </AnimatePresence>
    </div>
  )
}