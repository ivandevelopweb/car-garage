import { ArrowRight, Check, Phone } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { business, services } from '../content'
import { BookingForm } from '../components/BookingForm'
import { PageMeta } from '../components/PageMeta'
import { NotFoundPage } from './NotFoundPage'
import { TintingPage } from './TintingPage'

export function GenericServicePage() {
  const { serviceSlug } = useParams()
  const service = services.find((item) => item.slug === serviceSlug)

  if (!service) return <NotFoundPage />
  if (service.slug === 'tonuvannya-avto') return <TintingPage />

  return (
    <>
      <PageMeta title={`${service.title} — Автозвук, Тонировка`} description={`${service.title} у Шостці. Уточніть сумісність обладнання та обсяг роботи телефоном.`} />
      <section className="page-intro page-intro--dark"><div className="container page-intro__inner"><div><Link className="back-link" to="/posluhy"><ArrowRight size={16} className="back-link__icon" aria-hidden="true" />Усі послуги</Link><p className="eyebrow eyebrow--accent">Послуга</p><h1>{service.title}</h1><p className="page-intro__copy">{service.description}</p><Link className="button button--accent" to="/kontakty#zapis">Поставити питання <ArrowRight size={17} aria-hidden="true" /></Link></div><div className="page-intro__side"><span>{business.shortAddress}</span><span>{business.hours}</span></div></div></section>
      <section className="section section--paper"><div className="container split-grid"><div className="split-grid__lead"><p className="eyebrow">Перед записом</p><h2>Підберемо рішення під конкретний автомобіль.</h2><p>Можливість встановлення залежить від моделі авто, вже встановленого обладнання та задачі. Розкажіть деталі телефоном — так консультація буде точнішою.</p></div><div className="detail-list"><div><span className="detail-list__icon"><Check size={20} aria-hidden="true" /></span><div><strong>Уточнюємо сумісність</strong><p>Марка, модель і короткий опис задачі допоможуть почати.</p></div></div><div><span className="detail-list__icon"><Check size={20} aria-hidden="true" /></span><div><strong>Погоджуємо обсяг</strong><p>Без вигаданого прайсу до того, як зрозуміла сама робота.</p></div></div></div></div></section>
      <section className="section section--booking" id="zapis"><div className="container booking-section"><div className="booking-section__intro"><p className="eyebrow">Запис</p><h2>Підготуємо коротку розмову про авто.</h2><p>Залиште контакти або одразу телефонуйте в майстерню.</p><a className="booking-section__phone" href={business.phoneHref}><Phone size={19} aria-hidden="true" />{business.phone}</a></div><BookingForm /></div></section>
    </>
  )
}
