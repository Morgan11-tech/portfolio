import { useState } from 'react'
import { GitBranch, ExternalLink, Video, Globe, BookOpen, NotebookText } from 'lucide-react'
import HtmlDemo from './HtmlDemo'

const STATUS = {
  deployed:      { label: 'Deployed',    color: 'text-emerald-500', dot: 'bg-emerald-500' },
  completed:     { label: 'Completed',   color: 'text-blue-500',    dot: 'bg-blue-500' },
  'in-progress': { label: 'In Progress', color: 'text-amber-500',   dot: 'bg-amber-500' },
  research:      { label: 'Research',    color: 'text-purple-500',  dot: 'bg-purple-500' },
}

const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3 shrink-0" fill="currentColor">
    <path d="M3.18 23.76c.3.17.64.24.99.2L15.54 12 11.97 8.43 3.18 23.76zm17.12-13.59-2.72-1.56-3.51 3.51 3.51 3.51 2.75-1.57c.79-.44.79-1.45-.03-1.89zM2.01 1.05C1.7 1.4 1.5 1.93 1.5 2.62v18.76c0 .69.2 1.22.53 1.57l.09.08 10.5-10.5v-.25L2.01 1.05zm13.53 10.95L3.17.24c-.35-.04-.69.03-.99.2L11.97 8.43l3.57 3.57z"/>
  </svg>
)

const AppStoreIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3 shrink-0" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
)

// Pinterest-style masonry gallery — handles portrait and landscape naturally
function MasonryGallery({ images, name }) {
  const [lightbox, setLightbox] = useState(null)
  if (!images?.length) return null

  // Split into two columns, distributing images alternately
  const col1 = images.filter((_, i) => i % 2 === 0)
  const col2 = images.filter((_, i) => i % 2 === 1)

  return (
    <>
      <div>
        <p className="font-os text-[10px] tracking-widest mb-3" style={{ color: 'var(--mac-muted)' }}>
          GALLERY
        </p>
        <div className="grid grid-cols-2 gap-2">
          {[col1, col2].map((col, ci) => (
            <div key={ci} className="flex flex-col gap-2">
              {col.map((src, i) => {
                const globalIdx = ci === 0 ? i * 2 : i * 2 + 1
                return (
                  <button
                    key={src}
                    onClick={() => setLightbox(globalIdx)}
                    className="w-full overflow-hidden rounded-lg mac-card cursor-zoom-in group"
                    style={{ display: 'block' }}
                  >
                    <img
                      src={src}
                      alt={`${name} screenshot ${globalIdx + 1}`}
                      className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      style={{ display: 'block' }}
                    />
                  </button>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <img
              src={images[lightbox]}
              alt={`${name} ${lightbox + 1}`}
              className="max-w-full max-h-[88vh] rounded-xl object-contain shadow-2xl"
            />
            {/* Prev / Next */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setLightbox(i => (i - 1 + images.length) % images.length)}
                  className="absolute left-[-48px] top-1/2 -translate-y-1/2 mac-card w-9 h-9 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--mac-window-text)' }}
                >
                  ‹
                </button>
                <button
                  onClick={() => setLightbox(i => (i + 1) % images.length)}
                  className="absolute right-[-48px] top-1/2 -translate-y-1/2 mac-card w-9 h-9 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--mac-window-text)' }}
                >
                  ›
                </button>
              </>
            )}
            {/* Counter */}
            <div
              className="absolute bottom-[-32px] left-1/2 -translate-x-1/2 font-os text-[10px]"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              {lightbox + 1} / {images.length}
            </div>
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-[-36px] right-0 font-os text-[11px] hover:opacity-60 transition-opacity"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              ✕ close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

function StackPlaceholder({ tech }) {
  return (
    <div
      className="h-28 rounded-xl flex flex-col justify-end p-4"
      style={{ background: 'var(--mac-card-bg)', border: '1px solid var(--mac-card-border)' }}
    >
      <div className="font-os text-[10px] mb-2" style={{ color: 'var(--mac-muted)', opacity: 0.5 }}>
        $ stack --list
      </div>
      {tech.slice(0, 4).map(t => (
        <div key={t} className="font-os text-[10px] leading-relaxed" style={{ color: 'var(--mac-muted)', opacity: 0.4 }}>
          ├─ {t.toLowerCase()}
        </div>
      ))}
    </div>
  )
}

function LinkButton({ href, onClick, icon: Icon, label }) {
  const cls = "flex items-center gap-1.5 mac-card px-3 py-1.5 rounded-lg text-[11px] font-os transition-opacity hover:opacity-70 cursor-default"
  const content = <><Icon /><span>{label}</span></>

  if (href) return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cls}
      style={{ color: 'var(--mac-window-text)' }}
    >
      {content}
    </a>
  )
  return (
    <button onClick={onClick} className={cls} style={{ color: 'var(--mac-window-text)' }}>
      {content}
    </button>
  )
}

export default function ProjectDetail({ item, onOpenWindow }) {
  const status = STATUS[item.status] || STATUS.completed
  const { links = {} } = item
  const hasLinks = Object.values(links).some(Boolean)

  const openHtmlDemo = () => {
    onOpenWindow?.({
      id: `demo-${item.id}`,
      label: `demo — ${item.name}`,
      Component: HtmlDemo,
      props: { src: links.htmlDemo },
      widthClass: 'w-[820px]',
    })
  }

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-sm font-medium leading-snug" style={{ color: 'var(--mac-window-text)' }}>
          {item.name}
        </h2>
        <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
          <div className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
          <span className={`font-os text-[10px] ${status.color}`}>{status.label}</span>
        </div>
      </div>

      <p className="font-os text-[10px]" style={{ color: 'var(--mac-muted)' }}>{item.date}</p>

      {item.images?.length > 0 && (
        <div className="w-full h-44 rounded-xl overflow-hidden mac-card">
          <img
            src={item.images[0]}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Stack placeholder — only shown when no images */}
      {!item.images?.length && <StackPlaceholder tech={item.tech} />}

      {/* Description */}
      <p className="text-xs leading-relaxed" style={{ color: 'var(--mac-window-text)', opacity: 0.75 }}>
        {item.longDesc}
      </p>

      {/* Tech stack tags */}
      <div>
        <p className="font-os text-[10px] tracking-widest mb-2" style={{ color: 'var(--mac-muted)' }}>STACK</p>
        <div className="flex flex-wrap gap-1.5">
          {item.tech.map(t => (
            <span key={t} className="font-os text-[10px] mac-tag px-2.5 py-1 rounded-full">{t}</span>
          ))}
        </div>
      </div>

      {/* Links */}
      {hasLinks && (
        <div>
          <p className="font-os text-[10px] tracking-widest mb-2.5" style={{ color: 'var(--mac-muted)' }}>LINKS</p>
          <div className="flex flex-wrap gap-2">
            {links.github && (
              <LinkButton href={links.github} icon={() => <GitBranch size={12} strokeWidth={1.5} />} label="GitHub" />
            )}
            {links.demo && (
              <LinkButton href={links.demo} icon={() => <ExternalLink size={12} strokeWidth={1.5} />} label="Live Demo" />
            )}
            {links.video && (
              <LinkButton href={links.video} icon={() => <Video size={12} strokeWidth={1.5} />} label="Watch Demo" />
            )}
            {links.htmlDemo && (
              <LinkButton onClick={openHtmlDemo} icon={() => <Globe size={12} strokeWidth={1.5} />} label="View Demo" />
            )}
            {links.paper && (
              <LinkButton href={links.paper} icon={() => <BookOpen size={12} strokeWidth={1.5} />} label="Paper" />
            )}
            {links.notion && (
              <LinkButton href={links.notion} icon={() => <NotebookText size={12} strokeWidth={1.5} />} label="Notion" />
            )}
            {links.playstore && (
              <LinkButton href={links.playstore} icon={PlayStoreIcon} label="Play Store" />
            )}
            {links.appstore && (
              <LinkButton href={links.appstore} icon={AppStoreIcon} label="App Store" />
            )}
          </div>
        </div>
      )}

      {/* Pinterest-style masonry gallery — portrait and landscape friendly */}
      <MasonryGallery images={item.images} name={item.name} />

    </div>
  )
}