import { ArrowRight, MapPin, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, images } from '../content'
import { PageMeta } from '../components/PageMeta'
import { PageBooking } from '../components/PageBooking'
import { PhotoFrame } from '../components/PhotoFrame'

export function AboutPage() {
  return (
    <>
      <PageMeta title="Про нас — Автозвук, Тонировка" description="Коротко про локальну майстерню «Автозвук, Тонировка» у Шостці: спеціалізація, адреса та запис." />
      <section className="page-intro page-intro--dark"><div className="container page-intro__inner"><div><p className="eyebrow eyebrow--accent">Про майстерню</p><h1>Місце, де починають із задачі автомобіля.</h1><p className="page-intro__copy">«Автозвук, Тонировка» — локальна автомайстерня у Шостці. Тут працюють із тонуванням скла, автозвуком та додатковим обладнанням.</p><Link className="button button--accent" to="/kontakty#zapis">Поставити питання <ArrowRight size={17} aria-hidden="true" /></Link></div><div className="page-intro__side"><span><MapPin size={17} aria-hidden="true" />{business.shortAddress}</span><span><Star size={16} fill="currentColor" aria-hidden="true" />{business.rating} · {business.reviewCount}</span></div></div></section>
      <section className="section section--paper"><div className="container about-grid"><div className="about-grid__quote"><span className="quote-mark">“</span><blockquote>Спочатку розібратися, що потрібно авто. Потім — погодити роботу.</blockquote><span className="quote-caption">Простий принцип для локальної майстерні</span></div><div className="about-grid__copy"><p className="eyebrow">Без зайвих обіцянок</p><h2>Сайт не замінює розмову з майстром — він допомагає швидше до неї дійти.</h2><p>Ми залишили на сторінці тільки ті напрямки, які підтверджені карткою бізнесу та відгуками. За деталями по конкретному авто краще зателефонувати: так можна одразу уточнити сумісність і обсяг робіт.</p><Link className="text-link" to="/kontakty">Контакти та графік <ArrowRight size={16} aria-hidden="true" /></Link></div></div></section>
      <section className="section"><div className="container about-points"><div className="about-point"><span>01</span><h3>Локальна адреса</h3><p>Майстерня знаходиться у Шостці на вул. Партизан, 4.</p></div><div className="about-point"><span>02</span><h3>Зрозумілі напрямки</h3><p>Скло, звук і додаткове обладнання — без списку «всього для всіх».</p></div><div className="about-point"><span>03</span><h3>Прямий зв’язок</h3><p>Питання щодо авто вирішуються телефоном у робочі години.</p></div></div></section>
      <section className="section section--gallery"><div className="container about-media"><PhotoFrame src={images.workshop} alt="Майстри працюють з автомобілем у сервісному боксі" label="Сервісний бокс" /><div><p className="eyebrow">Робота з автомобілем</p><h2>Спочатку слухаємо задачу, потім пропонуємо роботу.</h2><p>Покажіть авто або опишіть його телефоном. Так швидше зрозуміти, яке обладнання підійде і що потрібно врахувати до початку монтажу.</p><Link className="button button--dark" to="/kontakty#zapis">Поставити питання <ArrowRight size={17} aria-hidden="true" /></Link></div></div></section>
      <PageBooking />
    </>
  )
}
