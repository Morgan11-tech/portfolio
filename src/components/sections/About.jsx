export default function About() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-os  text-base font-semibold" style={{ color: 'var(--mac-window-text)' }}>Nana Kofi Sarpong Morgan</h2>
        <p className="font-os text-[10px] tracking-widest mt-1" style={{ color: 'var(--mac-muted)' }}>
          SOFTWARE ENGINEER · STUDENT · INTERACTION TECHNOLOGIST
        </p>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--mac-window-text)', opacity: 0.75 }}>
            A software engineer with a strong background in mobile application development
            and UI/UX design, currently pursuing an MSc in Interaction Technology at the
            University of Twente, Netherlands.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--mac-window-text)', opacity: 0.75 }}>
            I enjoy building user-friendly, well-crafted software from mobile apps to
            web platforms with experience spanning frontend development, interaction
            design, and some machine learning work along the way.
            </p>
      <div className="pt-3 space-y-2" style={{ borderTop: '1px solid var(--mac-card-border)' }}>
        <p className="font-os text-[10px] tracking-widest mb-3" style={{ color: 'var(--mac-muted)' }}>NOW</p>
        {[
          'MSc Interaction Technology @ University of Twente',
          'Software Engineer',
          'Enschede, Netherlands',
        ].map((item, i) => (
          <div key={i} className="flex gap-3 items-start">
            <span className="font-os text-xs mt-0.5" style={{ color: 'var(--mac-muted)' }}>→</span>
            <p className="text-sm" style={{ color: 'var(--mac-window-text)', opacity: 0.65 }}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}