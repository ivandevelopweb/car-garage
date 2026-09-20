import { ArrowUpRight, Clock3, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business } from '../content'
import { Brand } from './Brand'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <Brand light />
          <p>Автозвук і тонування авто у Шостці. Питання по вашому автомобілю — телефоном.</p>
          <a className="footer-phone" href={business.phoneHref}><Phone size={18} aria-hidden="true" />{business.phone}</a>
        </div>
        <div className="site-footer__column">
          <span className="footer-label">Навігація</span>
          <Link to="/posluhy">Послуги</Link>
          <Link to="/pro-nas">Про нас</Link>
          <Link to="/kontakty">Контакти</Link>
          <Link to="/materialy">Корисні матеріали</Link>
        </div>
        <div className="site-footer__column site-footer__column--wide">
          <span className="footer-label">Майстерня</span>
          <a href={business.routeUrl}><MapPin size={16} aria-hidden="true" />{business.address}</a>
          <span><Clock3 size={16} aria-hidden="true" />{business.hours}</span>
          <a className="footer-map-link" href={business.mapsUrl} target="_blank" rel="noreferrer">Відкрити в Google Maps <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} «Автозвук, Тонировка»</span>
        <span>Шостка · вул. Партизан, 4</span>
      </div>
    </footer>
  )
}
