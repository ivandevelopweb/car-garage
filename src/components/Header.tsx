import { ArrowRight, ChevronDown, Clock3, MapPin, Menu, Phone, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { business, services } from '../content'
import { Brand } from './Brand'

const links = [
  { to: '/', label: 'Головна' },
  { to: '/pro-nas', label: 'Про нас' },
  { to: '/kontakty', label: 'Контакти' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { pathname } = useLocation()
  const servicesActive = pathname.startsWith('/posluhy')

  function closeNavigation() {
    setOpen(false)
    setServicesOpen(false)
  }

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <div className="utility-bar__item"><MapPin size={14} aria-hidden="true" /><span>{business.shortAddress}</span></div>
          <div className="utility-bar__item"><Clock3 size={14} aria-hidden="true" /><span>{business.hours}</span></div>
          <a className="utility-bar__phone" href={business.phoneHref}><Phone size={14} aria-hidden="true" />{business.phone}</a>
        </div>
      </div>
      <div className="nav-shell">
        <div className="container nav-shell__inner">
          <Brand />
          <nav className={`main-nav ${open ? 'main-nav--open' : ''}`} aria-label="Основна навігація">
            <div className="main-nav__links">
              {links.slice(0, 1).map((link) => <NavLink key={link.to} to={link.to} end onClick={closeNavigation}>{link.label}</NavLink>)}
              <div className={`nav-dropdown ${servicesOpen ? 'nav-dropdown--open ' : ''}${servicesActive ? 'nav-dropdown--active' : ''}`} onPointerEnter={(event) => { if (event.pointerType === 'mouse' && window.matchMedia('(min-width: 761px)').matches) setServicesOpen(true) }} onPointerLeave={(event) => { if (event.pointerType === 'mouse' && window.matchMedia('(min-width: 761px)').matches) setServicesOpen(false) }}>
                <button className="nav-dropdown__trigger" type="button" aria-expanded={servicesOpen} onClick={() => setServicesOpen((value) => !value)}>
                  <span>Послуги</span><ChevronDown size={15} aria-hidden="true" />
                </button>
                <div className="nav-dropdown__menu" aria-label="Послуги майстерні">
                  <NavLink to="/posluhy" onClick={closeNavigation}>Усі послуги <ArrowRight size={15} aria-hidden="true" /></NavLink>
                  {services.map((service) => <NavLink key={service.slug} to={`/posluhy/${service.slug}`} onClick={closeNavigation}>{service.title} <ArrowRight size={15} aria-hidden="true" /></NavLink>)}
                </div>
              </div>
              {links.slice(1).map((link) => <NavLink key={link.to} to={link.to} onClick={closeNavigation}>{link.label}</NavLink>)}
              <NavLink to="/materialy" onClick={closeNavigation}>Поради</NavLink>
            </div>
            <div className="main-nav__mobile-contact">
              <a href={business.phoneHref}><Phone size={16} aria-hidden="true" />{business.phone}</a>
              <a className="button button--accent" href="#zapis" onClick={closeNavigation}>Записатися</a>
            </div>
          </nav>
          <div className="nav-actions">
            <a className="nav-phone" href={business.phoneHref}><Phone size={16} aria-hidden="true" /><span>{business.phone}</span></a>
            <a className="button button--accent button--small" href="#zapis">Записатися</a>
            <button className="menu-toggle" type="button" aria-label={open ? 'Закрити меню' : 'Відкрити меню'} aria-expanded={open} onClick={() => { setOpen(!open); setServicesOpen(false) }}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
