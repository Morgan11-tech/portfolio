const stack = {
  Languages:  ['Python', 'JavaScript', 'Dart', 'Java'],
  'ML / AI':  ['XGBoost', 'PyTorch', 'TabM', 'scikit-learn', 'pandas'],
  Frontend:   ['React', 'Flutter', 'Tailwind CSS'],
  Backend:    ['Java Spring', 'Firebase', 'REST APIs'],
  Tools:      ['Git', 'Jupyter', 'VS Code', 'Figma', 'Notion', 'Android Studio'],
}

export default function Stack() {
  return (
    <div className="space-y-5">
      <p className="font-os text-[10px] tracking-widest" style={{ color: 'var(--mac-muted)' }}>
        TOOLS & TECHNOLOGIES
      </p>
      {Object.entries(stack).map(([cat, items]) => (
        <div key={cat}>
          <p className="font-os text-[10px] mb-2" style={{ color: 'var(--mac-muted)' }}>{cat}</p>
          <div className="flex flex-wrap gap-1.5">
            {items.map(item => (
              <span key={item} className="font-os text-[10px] mac-tag px-3 py-1 rounded-full">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}