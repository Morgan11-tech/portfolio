import { motion } from 'framer-motion'

export default function MobileDrawer({ title, children, onClose, zIndex = 50 }) {
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/40"
        style={{ zIndex: zIndex - 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        className="fixed bottom-0 left-0 right-0 mac-window rounded-t-2xl max-h-[88vh] flex flex-col"
        style={{ zIndex, borderTop: '1px solid var(--mac-title-border)' }}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', stiffness: 320, damping: 30 }}
      >
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-9 h-1 rounded-full" style={{ background: 'var(--mac-card-border)' }} />
        </div>
        <div className="flex items-center justify-between px-6 py-3" style={{ borderBottom: '1px solid var(--mac-title-border)' }}>
          <span className="font-os text-xs" style={{ color: 'var(--mac-muted)' }}>~/{title}</span>
          <button
            onClick={onClose}
            className="font-os text-xs transition-opacity hover:opacity-60"
            style={{ color: 'var(--mac-muted)' }}
          >
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {children}
        </div>
      </motion.div>
    </>
  )
}