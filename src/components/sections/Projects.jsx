import ProjectBrowser from '../shared/ProjectBrowser'
import { PROJECTS } from '../../data/items'

export default function Projects({ onOpenWindow }) {
  return (
    <div>
      <p className="font-os text-[10px] tracking-widest mb-4" style={{ color: 'var(--mac-muted)' }}>
        ENGINEERING
      </p>
      <ProjectBrowser items={PROJECTS} onOpenWindow={onOpenWindow} />
    </div>
  )
}