import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Sun, Moon, User, FolderOpen, FlaskConical, Microscope, Wrench, Mail, FileText, ChevronRight, Download } from 'lucide-react'
import MobileDrawer from './MobileDrawer'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Research from '../sections/Research'
import Lab from '../sections/Lab'
import Stack from '../sections/Stack'
import Contact from '../sections/Contact'

const SECTIONS = [
  { id: 'about',    label: 'about',    Icon: User,         sub: 'who I am',             Component: About },
  { id: 'projects', label: 'projects', Icon: FolderOpen,   sub: 'things I built',       Component: Projects },
  { id: 'research', label: 'research', Icon: Microscope,   sub: 'ML & healthcare',      Component: Research },
  { id: 'lab',      label: 'lab',      Icon: FlaskConical, sub: 'experiments & design', Component: Lab },
  { id: 'stack',    label: 'stack',    Icon: Wrench,       sub: 'tools & technologies', Component: Stack },
  { id: 'contact',  label: 'contact',  Icon: Mail,         sub: 'get in touch',         Component: Contact },
]

export default function MobileHome({ dark, onToggleTheme }) {
  const [activeSection, setActiveSection] = useState(null)
  const [detailStack, setDetailStack] = useState([])

  const openDetail = (config) => setDetailStack(prev => [...prev, config])
  const closeTopDetail = () => setDetailStack(prev => prev.slice(0, -1))
  const closeSection = () => { setActiveSection(null); setDetailStack([]) }

  const topDetail = detailStack[detailStack.length - 1]

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col mac-mobile-bg">

      {/* Header */}
      <div className="mac-titlebar px-6 pt-14 pb-5 flex items-end justify-between">
        <div>
          <p className="font-os text-[10px] tracking-[0.2em] mb-1" style={{ color: 'var(--mac-muted)' }}>
            SOFTWARE ENGINEER · MOBILE DEV · UI/UX
          </p>
          <h1 className="font-os text-2xl font-medium" style={{ color: 'var(--mac-window-text)' }}>
            Nana Kofi Sarpong Morgan
          </h1>
          <p className="font-os text-xs mt-1" style={{ color: 'var(--mac-muted)' }}>~/portfolio</p>
        </div>
        <button
          onClick={onToggleTheme}
          className="mb-1 p-2 rounded-lg transition-opacity hover:opacity-60"
          style={{ color: 'var(--mac-window-text)' }}
        >
          {dark ? <Sun size={15} strokeWidth={1.5} /> : <Moon size={15} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Section list */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2.5">
        {SECTIONS.map(s => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s)}
            className="w-full mac-mobile-card rounded-xl px-5 py-4 flex items-center gap-4 text-left active:scale-[0.98] transition-transform"
          >
            <s.Icon size={18} strokeWidth={1.5} style={{ color: 'var(--mac-muted)' }} className="shrink-0" />
            <div className="flex-1">
              <p className="font-os text-sm" style={{ color: 'var(--mac-window-text)' }}>~/{s.label}</p>
              <p className="font-os text-xs mt-0.5" style={{ color: 'var(--mac-muted)' }}>{s.sub}</p>
            </div>
            <ChevronRight size={14} strokeWidth={1.5} style={{ color: 'var(--mac-muted)' }} />
          </button>
        ))}

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mac-mobile-card rounded-xl px-5 py-4 flex items-center gap-4 active:scale-[0.98] transition-transform block"
        >
          <FileText size={18} strokeWidth={1.5} style={{ color: 'var(--mac-muted)' }} className="shrink-0" />
          <div className="flex-1">
            <p className="font-os text-sm" style={{ color: 'var(--mac-window-text)' }}>resume.pdf</p>
            <p className="font-os text-xs mt-0.5" style={{ color: 'var(--mac-muted)' }}>download CV</p>
          </div>
          <Download size={14} strokeWidth={1.5} style={{ color: 'var(--mac-muted)' }} />
        </a>
      </div>

      {/* Level 1 — section browser */}
      <AnimatePresence>
        {activeSection && (
          <MobileDrawer title={activeSection.label} onClose={closeSection} zIndex={50}>
            <activeSection.Component onOpenWindow={openDetail} />
          </MobileDrawer>
        )}
      </AnimatePresence>

      {/* Level 2 — detail / demo */}
      <AnimatePresence>
        {topDetail && (
          <MobileDrawer title={topDetail.label} onClose={closeTopDetail} zIndex={60}>
            <topDetail.Component {...(topDetail.props || {})} onOpenWindow={openDetail} />
          </MobileDrawer>
        )}
      </AnimatePresence>
    </div>
  )
}