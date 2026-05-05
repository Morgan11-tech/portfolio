import { motion } from 'framer-motion'
import { Folder, FileText, FileDown } from 'lucide-react'

export default function DesktopIcon({ label, type = 'folder', onClick }) {
  const icon = {
    folder: <Folder size={46} strokeWidth={1.2} className="text-blue-400" fill="rgba(96,165,250,0.2)" />,
    txt:    <FileText size={42} strokeWidth={1.2} className="text-gray-300" />,
    pdf:    <FileDown size={42} strokeWidth={1.2} className="text-red-300" />,
  }[type] ?? <Folder size={46} strokeWidth={1.2} className="text-blue-400" />

  return (
    <motion.button
      onClick={onClick}
      className="flex flex-col items-center gap-1.5 p-2 rounded-xl select-none group"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      <div className="group-hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.4)] transition-all duration-200">
        {icon}
      </div>
      <span className="font-os text-white/90 text-[10px] text-center bg-black/40 px-2 py-0.5 rounded max-w-[84px] leading-tight truncate">
        {label}
      </span>
    </motion.button>
  )
}