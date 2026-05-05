import ProjectBrowser from '../shared/ProjectBrowser'
import { RESEARCH } from '../../data/items'

export default function Research({ onOpenWindow }) {
  return (
    <div>
      <p className="font-os text-[10px] tracking-widest mb-4" style={{ color: 'var(--mac-muted)' }}>
        HEALTHCARE ML
      </p>
      <ProjectBrowser items={RESEARCH} onOpenWindow={onOpenWindow} />
    </div>
  )
}