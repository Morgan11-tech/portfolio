import ProjectBrowser from '../shared/ProjectBrowser'
import { LAB } from '../../data/items'

export default function Lab({ onOpenWindow }) {
  return (
    <div>
      <p className="font-os text-[10px] tracking-widest mb-4" style={{ color: 'var(--mac-muted)' }}>
        EXPERIMENTS · M-ITECH
      </p>
      <ProjectBrowser
        items={LAB}
        onOpenWindow={onOpenWindow}
        emptyMessage="mostly empty — check back as the programme progresses"
      />
    </div>
  )
}