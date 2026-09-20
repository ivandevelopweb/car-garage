import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type SectionHeadingProps = {
  title: string
  copy?: string
  link?: { label: string; to: string }
  light?: boolean
}

export function SectionHeading({ title, copy, link, light = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${light ? 'section-heading--light' : ''}`}>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
      {link && <Link className="text-link" to={link.to}>{link.label}<ArrowUpRight size={16} aria-hidden="true" /></Link>}
    </div>
  )
}
