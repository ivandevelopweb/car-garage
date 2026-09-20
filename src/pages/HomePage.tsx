import { ArrowRight, Clock3, MapPin, Phone, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business, articles, images, services } from '../content'
import { BookingForm } from '../components/BookingForm'
import { PageMeta } from '../components/PageMeta'
import { PhotoFrame } from '../components/PhotoFrame'
import { ReviewBlock } from '../components/ReviewBlock'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceRow } from '../components/ServiceRow'

export function HomePage() {
  return (
    <>
      <PageMeta title="Автозвук, Тонировка — Шостка" description="Тонування авто, автозвук та додаткове обладнання у Шостці. вул. Партизан, 4. Запис телефоном: +380 66 288 7331." />
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--accent">Автомайстерня у Шостці</p>
            <h1>Автозвук і тонування авто у Шостці</h1>
            <p className="hero__lead">Тонування скла, встановлення акустики та додаткового обладнання. Розкажіть, що потрібно вашому авто — підкажемо по телефону.</p>
            <div className="hero__actions">
              <a className="button button--accent" href="#zapis">Записатися <ArrowRight size={17} aria-hidden="true" /></a>
              <Link className="button button--outline-light" to="/kontakty#zapis"><Phone size={17} aria-hidden="true" />Зателефонувати</Link>
            </div>
            <div className="hero__facts">
              <span><MapPin size={15} aria-hidden="true" />{business.shortAddress}</span>
              <span><Clock3 size={15} aria-hidden="true" />{business.hours}</span>
            </div>
          </div>
          <div className="hero__media">
            <img src={images.hero} alt="Майстер працює з автомобілем у сервісному боксі" />
            <div className="hero__media-note"><span className="signal-dot" />Робота з авто — без зайвого шуму</div>
          </div>
        </div>
        <div className="container hero__bottomline"><span>Актуальна інформація</span><span className="hero__rating"><Star size={15} fill="currentColor" aria-hidden="true" />{business.rating} · {business.reviewCount}</span><span>Пн–Сб · 09:00–16:00</span></div>
      </section>

      <section className="trust-rail">
        <div className="container trust-rail__grid">
          <div><span className="data-label">Де ми</span><strong>вул. Партизан, 4</strong><span>Шостка, Сумська область</span></div>
          <div><span className="data-label">Коли працюємо</span><strong>Пн–Сб · 09:00–16:00</strong><span>Неділя — вихідний</span></div>
          <div><span className="data-label">Як зв’язатися</span><a href={business.phoneHref}><strong>{business.phone}</strong></a><span>Запис та консультація телефоном</span></div>
          <Link className="trust-rail__route" to="/kontakty">Контакти <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="section section--services">
        <div className="container">
          <SectionHeading title="Послуги без зайвого списку" copy="Працюємо з конкретними задачами: скло, звук та додаткове обладнання для автомобіля." link={{ label: 'Усі послуги', to: '/posluhy' }} />
          <div className="services-list">{services.map((service, index) => <ServiceRow key={service.slug} service={service} index={index} />)}</div>
        </div>
      </section>

      <section className="section section--split section--paper">
        <div className="container split-grid">
          <div className="split-grid__lead"><p className="eyebrow">Як це виглядає</p><h2>Починаємо з вашої задачі, а не з довгого прайсу.</h2><p>Можна одразу зателефонувати або залишити коротку заявку. Під час розмови уточнимо модель авто, обсяг робіт та зручний час.</p><Link className="text-link" to="/pro-nas">Більше про майстерню <ArrowRight size={16} aria-hidden="true" /></Link></div>
          <div className="reason-list">
            <div className="reason-row"><span>01</span><div><strong>Конкретна консультація</strong><p>Підкажемо, що потрібно перевірити до початку роботи.</p></div></div>
            <div className="reason-row"><span>02</span><div><strong>Локально у Шостці</strong><p>Адреса, телефон і графік завжди під рукою.</p></div></div>
            <div className="reason-row"><span>03</span><div><strong>Запис без складної форми</strong><p>Залиште номер або одразу телефонуйте в майстерню.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section section--gallery">
        <div className="container">
          <SectionHeading title="З чим працюємо" />
          <div className="gallery-grid">
            <PhotoFrame className="photo-frame--wide" src={images.tinting} alt="Майстер встановлює тонувальну плівку на автомобільне скло" label="Тонування скла" />
            <PhotoFrame src={images.audio} alt="Деталь автомобільної акустики в салоні" label="Автозвук і акустика" />
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container review-section">
          <div className="review-section__intro"><p className="eyebrow eyebrow--accent">Google Maps</p><h2>Відгуки, які вже є.</h2><p>Показуємо актуальний рейтинг картки, без вигаданих історій та «тисяч клієнтів».</p><a className="button button--outline-light" href={business.mapsUrl} target="_blank" rel="noreferrer">Відкрити картку <ArrowUpRightIcon /></a></div>
          <ReviewBlock />
        </div>
      </section>

      <section className="section section--booking" id="zapis">
        <div className="container booking-section">
          <div className="booking-section__intro"><p className="eyebrow">Запис</p><h2>Опишіть задачу — підготуємо розмову.</h2><p>Залиште контакти й коротко напишіть, що потрібно зробити. Для точного підтвердження ми все одно зателефонуємо.</p><a className="booking-section__phone" href={business.phoneHref}><Phone size={19} aria-hidden="true" />{business.phone}</a></div>
          <BookingForm />
        </div>
      </section>

      <section className="section section--materials">
        <div className="container">
          <SectionHeading title="Корисні матеріали" copy="Невеликий розділ з практичними підказками перед записом." link={{ label: 'Усі матеріали', to: '/materialy' }} />
          <div className="material-grid">{articles.map((article, index) => <Link key={article.slug} className={`material-card ${index === 0 ? 'material-card--featured' : ''}`} to={`/materialy/${article.slug}`}><span className="material-card__meta">{article.tag} · {article.readTime}</span><h3>{article.title}</h3><p>{article.excerpt}</p><span className="text-link">Читати <ArrowRight size={16} aria-hidden="true" /></span></Link>)}</div>
        </div>
      </section>
    </>
  )
}

function ArrowUpRightIcon() {
  return <ArrowRight size={17} aria-hidden="true" />
}
