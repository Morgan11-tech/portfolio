export default function HtmlDemo({ src }) {
  return (
    <div className="w-full h-[540px]">
      <iframe
        src={src}
        title="Project Demo"
        className="w-full h-full rounded-xl border-0 bg-white"
        sandbox="allow-scripts allow-same-origin allow-forms"
      />
    </div>
  )
}