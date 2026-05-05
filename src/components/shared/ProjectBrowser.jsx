import { motion } from 'framer-motion'
import ProjectDetail from './ProjectDetail'

const STATUS = {
  deployed:      { label: 'Deployed',     color: 'text-emerald-400', dot: 'bg-emerald-400' },
  completed:     { label: 'Completed',    color: 'text-blue-400',    dot: 'bg-blue-400' },
  'in-progress': { label: 'In Progress',  color: 'text-amber-400',   dot: 'bg-amber-400' },
  research:      { label: 'Research',     color: 'text-purple-400',  dot: 'bg-purple-400' },
}

function ThumbnailPlaceholder({ tech }) {
  return (
    <div className="w-full h-full bg-black/40 flex flex-col justify-end p-3">
      <div className="font-os text-white/20 text-[9px] mb-1">$ stack --list</div>
      {tech.slice(0, 3).map(t => (
        <div key={t} className="font-os text-white/15 text-[9px] leading-relaxed">
          ├─ {t.toLowerCase()}
        </div>
      ))}
    </div>
  )
}

export default function ProjectBrowser({ items, onOpenWindow, emptyMessage }) {
  if (!items || items.length === 0) {
    return (
      <div className="flex items-center justify-center h-32">
        <p className="font-os text-xs italic" style={{ color: 'var(--mac-muted)' }}>
          {emptyMessage || '[ empty ]'}
        </p>
      </div>
    )
  }

  const handleOpen = (item) => {
    onOpenWindow?.({
      id: `detail-${item.id}`,
      label: item.name,
      Component: ProjectDetail,
      props: { item, onOpenWindow },
      widthClass: 'w-[640px]',
    })
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item, i) => {
        const status = STATUS[item.status] || STATUS.completed
        return (
          <motion.button
            key={item.id}
            onClick={() => handleOpen(item)}
            className="mac-card rounded-xl overflow-hidden text-left group cursor-default"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
          >
            {/* Thumbnail */}
            <div className="h-28 overflow-hidden bg-black/20 relative">
              {item.thumbnail
                ? <img src={item.thumbnail} alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                : <ThumbnailPlaceholder tech={item.tech} />
              }
              <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ background: 'var(--mac-card-bg)', border: '1px solid var(--mac-card-border)' }}>
                <div className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                <span className={`font-os text-[9px] ${status.color}`}>{status.label}</span>
              </div>
            </div>
            {/* Info */}
            <div className="p-3 space-y-1.5">
              <p className=" text-xs font-medium leading-snug line-clamp-2" style={{ color: 'var(--mac-window-text)' }}>{item.name}</p>
              <p className=" text-[10px] leading-relaxed line-clamp-2" style={{ color: 'var(--mac-muted)' }}>{item.shortDesc}</p>
              <div className="flex flex-wrap gap-1 pt-0.5">
                {item.tech.slice(0, 3).map(t => (
                  <span key={t} className="font-os text-[9px] bg-white/10 text-white/45 px-1.5 py-0.5 rounded-full" style={{ color: 'var(--mac-muted)' }}>
                    {t}
                  </span>
                ))}
                {item.tech.length > 3 && (
                  <span className="font-os text-[9px] mac-tag px-1.5 py-0.5 rounded-full" style={{ color: 'var(--mac-muted)' }}>
                    +{item.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          </motion.button>
        )
      })}
    </div>
  )
}