import { ArrowRight, Check, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, images, tintingFaq } from '../content'
import { BookingForm } from '../components/BookingForm'
import { DetailIcon } from '../components/Icon'
import { PageMeta } from '../components/PageMeta'
import { PhotoFrame } from '../components/PhotoFrame'

export function TintingPage() {
  return (
    <>
      <PageMeta title="Тонування авто у Шостці — Автозвук, Тонировка" description="Практична інформація про тонування авто у Шостці: що уточнити до роботи, етапи та запис телефоном." />
      <section className="service-hero">
        <div className="container service-hero__grid"><div><Link className="back-link" to="/posluhy"><ArrowRight size={16} className="back-link__icon" aria-hidden="true" />Усі послуги</Link><p className="eyebrow eyebrow--accent">Послуга · 01</p><h1>Тонування авто у Шостці</h1><p className="service-hero__lead">Працюємо зі склом під задачу вашого автомобіля. До запису уточнимо модель, стан скла і потрібний обсяг роботи.</p><div className="hero__actions"><a className="button button--accent" href="#zapis">Записатися <ArrowRight size={17} aria-hidden="true" /></a><a className="button button--outline-light" href={business.phoneHref}><Phone size={17} aria-hidden="true" />{business.phone}</a></div></div><div className="service-hero__media"><img src={images.tinting} alt="Майстер встановлює тонувальну плівку на автомобільне скло" /></div></div>
      </section>
      <section className="section section--paper">
        <div className="container split-grid"><div className="split-grid__lead"><p className="eyebrow">Перед початком</p><h2>Тонування — це не просто вибір темної плівки.</h2><p>Важливо врахувати, які саме стекла обробляємо, стан ущільнювачів і те, як ви користуєтесь авто. Тому стартуємо з короткої консультації.</p></div><div className="detail-list"><div><span className="detail-list__icon"><DetailIcon type="car" /></span><div><strong>Під вашу модель</strong><p>Уточнюємо авто та обсяг робіт до запису.</p></div></div><div><span className="detail-list__icon"><DetailIcon type="shield" /></span><div><strong>Акуратний процес</strong><p>У фокусі — чисте скло й коректне встановлення.</p></div></div></div></div>
      </section>
      <section className="section"><div className="container"><div className="section-heading"><h2>Що входить у роботу</h2><p>Конкретний склад погоджуємо після огляду автомобіля.</p></div><div className="check-grid"><div><Check size={18} aria-hidden="true" /><span>Уточнення задачі та моделі авто</span></div><div><Check size={18} aria-hidden="true" /><span>Огляд скла перед початком</span></div><div><Check size={18} aria-hidden="true" /><span>Підготовка поверхні до роботи</span></div><div><Check size={18} aria-hidden="true" /><span>Фінальна перевірка результату</span></div></div></div></section>
      <section className="section section--gallery"><div className="container"><div className="section-heading"><h2>Етапи без загадок</h2><p>Послідовність, яку легко пояснити телефоном.</p></div><div className="steps-grid"><div className="step"><span>01</span><h3>Розмова</h3><p>Збираємо інформацію про авто та вашу задачу.</p></div><div className="step"><span>02</span><h3>Огляд</h3><p>Дивимося на стан скла та уточнюємо обсяг.</p></div><div className="step"><span>03</span><h3>Робота</h3><p>Виконуємо погоджений формат тонування.</p></div><div className="step"><span>04</span><h3>Перевірка</h3><p>Показуємо результат і відповідаємо на питання.</p></div></div></div></section>
      <section className="section section--paper"><div className="container service-gallery"><PhotoFrame src={images.audioDetail} alt="Деталь автомобільної двері та акустики" label="Деталі монтажу" /><div className="service-gallery__copy"><p className="eyebrow">Корисно знати</p><h2>Запишіться, якщо хочете спочатку розібратися.</h2><p>Не обов’язково одразу знати правильний формат. Достатньо назвати авто та описати, що хочеться змінити.</p><Link className="text-link" to="/kontakty#zapis">Зателефонувати <ArrowRight size={16} aria-hidden="true" /></Link></div></div></section>
      <section className="section section--faq"><div className="container faq-layout"><div><p className="eyebrow">FAQ</p><h2>Питання перед записом</h2></div><div className="faq-list">{tintingFaq.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div></div></section>
      <section className="section section--booking" id="zapis"><div className="container booking-section"><div className="booking-section__intro"><p className="eyebrow">Запис на тонування</p><h2>Підготуємо коротку розмову про ваше авто.</h2><p>Напишіть контакти — або відразу зателефонуйте у графік роботи.</p><a className="booking-section__phone" href={business.phoneHref}><Phone size={19} aria-hidden="true" />{business.phone}</a></div><BookingForm dark /></div></section>
    </>
  )
}
