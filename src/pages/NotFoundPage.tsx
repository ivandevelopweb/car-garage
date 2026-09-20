import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageBooking } from '../components/PageBooking'

export function NotFoundPage() {
  return <><section className="page-intro page-intro--dark"><div className="container page-intro__inner"><div><p className="eyebrow eyebrow--accent">404</p><h1>Такої сторінки немає.</h1><p className="page-intro__copy">Поверніться на головну або відкрийте список послуг.</p><Link className="button button--accent" to="/"><ArrowLeft size={17} aria-hidden="true" />На головну</Link></div></div></section><PageBooking /></>
}
