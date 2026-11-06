import { useState } from 'react'
import { GitBranch, ExternalLink, Video, Globe, BookOpen, Database } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay, faAppStoreIos, faNotion, faYoutube } from '@fortawesome/free-brands-svg-icons'
import YoutubeEmbed from './YoutubeEmbed'

const STATUS = {
  deployed:      { label: 'Deployed',    color: 'text-emerald-500', dot: 'bg-emerald-500' },
  completed:     { label: 'Completed',   color: 'text-blue-500',    dot: 'bg-blue-500' },
  'in-progress': { label: 'In Progress', color: 'text-amber-500',   dot: 'bg-amber-500' },
  research:      { label: 'Research',    color: 'text-purple-500',  dot: 'bg-purple-500' },
}

function MasonryGallery({ images, name }) {
  const [lightbox, setLightbox] = useState(null)
  if (!images?.length) return null

  const col1 = images.filter((_, i) => i % 2 === 0)
  const col2 = images.filter((_, i) => i % 2 === 1)

  return (
    <>
      <div>
        <p className="font-os text-[10px] tracking-widest mb-3" style={{ color: 'var(--mac-muted)' }}>GALLERY</p>
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
                  >
                    <img
                      src={src}
                      alt={`${name} ${globalIdx + 1}`}
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
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setLightbox(i => (i - 1 + images.length) % images.length)}
                  className="absolute left-[-48px] top-1/2 -translate-y-1/2 mac-card w-9 h-9 rounded-full flex items-center justify-center hover:opacity-70"
                  style={{ color: 'var(--mac-window-text)' }}
                >‹</button>
                <button
                  onClick={() => setLightbox(i => (i + 1) % images.length)}
                  className="absolute right-[-48px] top-1/2 -translate-y-1/2 mac-card w-9 h-9 rounded-full flex items-center justify-center hover:opacity-70"
                  style={{ color: 'var(--mac-window-text)' }}
                >›</button>
              </>
            )}
            <div className="absolute bottom-[-32px] left-1/2 -translate-x-1/2 font-os text-[10px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {lightbox + 1} / {images.length}
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-[-36px] right-0 font-os text-[11px] hover:opacity-60"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >✕ close</button>
          </div>
        </div>
      )}
    </>
  )
}

function LinkButton({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 mac-card px-3 py-1.5 rounded-lg text-[11px] font-os transition-opacity hover:opacity-70"
      style={{ color: 'var(--mac-window-text)' }}
    >
      {icon}
      <span>{label}</span>
    </a>
  )
}

export default function ProjectDetail({ item, onOpenWindow }) {
  const status = STATUS[item.status] || STATUS.completed
  const { links = {} } = item

 const hasLinks = Object.entries(links).some(([k, v]) =>
    k === 'htmlDemos' ? Array.isArray(v) && v.length > 0 : Boolean(v)
  )

  const openYoutubeDemo = () => {
    onOpenWindow?.({
      id: `yt-${item.id}`,
      label: `demo — ${item.name}`,
      Component: YoutubeEmbed,
      props: { url: links.youtubeDemo },
      widthClass: 'w-[700px]',
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

      {/* Hero thumbnail */}
      {item.thumbnail && (
        <div className="w-full h-44 rounded-xl overflow-hidden mac-card">
          <img src={item.thumbnail} alt={item.name} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Description */}
      <p className="text-xs leading-relaxed" style={{ color: 'var(--mac-window-text)', opacity: 0.75 }}>
        {item.longDesc}
      </p>

      {/* Tech */}
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
              <LinkButton href={links.github} icon={<GitBranch size={12} strokeWidth={1.5} />} label="GitHub" />
            )}
            {links.website && (
              <LinkButton href={links.website} icon={<Globe size={12} strokeWidth={1.5} />} label="Website" />
            )}
            {links.demo && (
              <LinkButton href={links.demo} icon={<ExternalLink size={12} strokeWidth={1.5} />} label="Live Demo" />
            )}
            {links.video && (
              <LinkButton href={links.video} icon={<Video size={12} strokeWidth={1.5} />} label="Watch Demo" />
            )}
            {links.youtubeDemo && (
              <button
                onClick={openYoutubeDemo}
                className="flex items-center gap-1.5 mac-card px-3 py-1.5 rounded-lg text-[11px] font-os transition-opacity hover:opacity-70"
                style={{ color: 'var(--mac-window-text)' }}
              >
                <FontAwesomeIcon icon={faYoutube} className="w-3 h-3 text-red-500" />
                <span>Watch Demo</span>
              </button>
            )}
            {links.htmlDemos?.map(d => (
              <LinkButton key={d.label} href={d.src} icon={<Globe size={12} strokeWidth={1.5} />} label={d.label} />
            ))}
            {links.paper && (
              <LinkButton href={links.paper} icon={<BookOpen size={12} strokeWidth={1.5} />} label="Paper" />
            )}
            {links.huggingface && (
              <LinkButton href={links.huggingface} icon={<Database size={12} strokeWidth={1.5} />} label="Dataset" />
            )}
            {links.notion && (
              <LinkButton href={links.notion} icon={<FontAwesomeIcon icon={faNotion} className="w-3 h-3" />} label="Notion" />
            )}
            {links.playstore && (
              <LinkButton href={links.playstore} icon={<FontAwesomeIcon icon={faGooglePlay} className="w-3 h-3" />} label="Play Store" />
            )}
            {links.appstore && (
              <LinkButton href={links.appstore} icon={<FontAwesomeIcon icon={faAppStoreIos} className="w-3 h-3" />} label="App Store" />
            )}
          </div>
        </div>
      )}

      

      {/* Masonry gallery */}
      <MasonryGallery images={item.images} name={item.name} />

    </div>
  )
}