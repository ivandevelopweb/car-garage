type PhotoFrameProps = {
  src: string
  alt: string
  label: string
  className?: string
}

export function PhotoFrame({ src, alt, label, className = '' }: PhotoFrameProps) {
  return (
    <figure className={`photo-frame ${className}`}>
      <img src={src} alt={alt} loading="eager" decoding="async" />
      <figcaption><span>{label}</span></figcaption>
    </figure>
  )
}
