const links = [
  { label: 'email',    value: 'sarpongmorgan@gmail.com',       href: 'mailto:sarpongmorgan@gmail.com' },
  { label: 'github',   value: 'Morgan11-tech',                 href: 'https://github.com/Morgan11-tech' },
  { label: 'linkedin', value: 'in/n-sarpong-morgan',           href: 'https://www.linkedin.com/in/n-sarpong-morgan/' },
]

export default function Contact() {
  return (
    <div className="space-y-5">
      <p className="font-os text-[10px] tracking-widest" style={{ color: 'var(--mac-muted)' }}>
        CONTACT.TXT
      </p>

      <div className="font-os space-y-3">
        {links.map(l => (
          <div key={l.label} className="flex gap-3 items-center">
            <span className="text-xs w-20 shrink-0" style={{ color: 'var(--mac-muted)' }}>{l.label}</span>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs underline underline-offset-4 transition-opacity hover:opacity-60"
              style={{ color: 'var(--mac-window-text)' }}
            >
              {l.value}
            </a>
          </div>
        ))}
      </div>

      <div className="pt-4 space-y-1" style={{ borderTop: '1px solid var(--mac-card-border)' }}>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--mac-window-text)', opacity: 0.55 }}>
          Open to engineering roles, collaborations, and conversations about software and design.
        </p>
      </div>
    </div>
  )
}