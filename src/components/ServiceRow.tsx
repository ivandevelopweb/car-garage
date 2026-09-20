import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '../content'
import { ServiceIcon } from './Icon'

export function ServiceRow({ service, index }: { service: Service; index: number }) {
  return (
    <Link className={`service-row ${service.featured ? 'service-row--featured' : ''}`} to={`/posluhy/${service.slug}`}>
      <span className="service-row__number">0{index + 1}</span>
      <span className="service-row__icon"><ServiceIcon type={service.icon} /></span>
      <span className="service-row__body"><strong>{service.title}</strong><span>{service.short}</span></span>
      <ArrowUpRight className="service-row__arrow" size={20} aria-hidden="true" />
    </Link>
  )
}
