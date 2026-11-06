export default function YoutubeEmbed({ url }) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^?&]+)/)
  const videoId = match?.[1]

  if (!videoId) return (
    <p className="font-os text-xs p-4" style={{ color: 'var(--mac-muted)' }}>Invalid YouTube URL</p>
  )

  return (
    <div className="w-full aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Video Demo"
        className="w-full h-full rounded-lg border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}