import { motion, useDragControls } from 'framer-motion'

export default function Window({ title, children, onClose, zIndex, onFocus, initialX, initialY, widthClass }) {
  const dragControls = useDragControls()

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
      style={{ zIndex, position: 'fixed', top: initialY, left: initialX }}
      className={`${widthClass || 'w-[580px]'} max-w-[88vw] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)]`}
      onMouseDown={onFocus}
    >
      {/* Title bar */}
      <div
        onPointerDown={(e) => dragControls.start(e)}
        className="mac-titlebar h-10 flex items-center px-4 gap-2.5 cursor-grab active:cursor-grabbing select-none"
      >
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={onClose}
          className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors flex-shrink-0"
        />
        <div className="w-3 h-3 rounded-full bg-yellow-400 flex-shrink-0" />
        <div className="w-3 h-3 rounded-full bg-green-400 flex-shrink-0" />
        <span
          className="font-os text-[11px] mx-auto pr-10 truncate"
          style={{ color: 'var(--mac-muted)' }}
        >
          {title}
        </span>
      </div>

      {/* Content */}
      <div className="mac-window min-h-[260px] max-h-[68vh] overflow-y-auto p-6">
        {children}
      </div>
    </motion.div>
  )
}