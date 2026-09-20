import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business } from '../content'

type PageIntroProps = {
  eyebrow?: string
  title: string
  copy: string
  action?: { label: string; to: string }
  compact?: boolean
}

export function PageIntro({ eyebrow, title, copy, action, compact = false }: PageIntroProps) {
  return (
    <section className={`page-intro ${compact ? 'page-intro--compact' : ''}`}>
      <div className="container page-intro__inner">
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          <p className="page-intro__copy">{copy}</p>
          {action && <Link className="button button--accent" to={action.to}>{action.label}<ArrowRight size={17} aria-hidden="true" /></Link>}
        </div>
        <div className="page-intro__side">
          <span><MapPin size={17} aria-hidden="true" />{business.shortAddress}</span>
          <span>{business.hours}</span>
        </div>
      </div>
    </section>
  )
}
