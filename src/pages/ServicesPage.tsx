import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../content'
import { PageIntro } from '../components/PageIntro'
import { PageBooking } from '../components/PageBooking'
import { PageMeta } from '../components/PageMeta'
import { ServiceRow } from '../components/ServiceRow'

export function ServicesPage() {
  return (
    <>
      <PageMeta title="Послуги — Автозвук, Тонировка" description="Послуги майстерні в Шостці: тонування авто, автозвук, встановлення акустики та додаткового обладнання." />
      <PageIntro eyebrow="Послуги" title="Що можна зробити в майстерні" copy="Чотири зрозумілі напрямки без вигаданого каталогу. Якщо не впевнені, зателефонуйте — розберемо задачу по вашому авто." action={{ label: 'Поставити питання', to: '/kontakty#zapis' }} />
      <section className="section section--services page-section">
        <div className="container narrow-container">
          <div className="services-list services-list--page">{services.map((service, index) => <ServiceRow key={service.slug} service={service} index={index} />)}</div>
          <div className="callout callout--accent"><div><span className="eyebrow">Потрібна порада?</span><h2>Опишіть авто — підкажемо, з чого почати.</h2></div><Link className="button button--dark" to="/kontakty#zapis">Поставити питання <ArrowRight size={17} aria-hidden="true" /></Link></div>
        </div>
      </section>
      <section className="section section--paper">
        <div className="container split-grid split-grid--compact"><div><p className="eyebrow">Чесна структура</p><h2>Ціна залежить від авто та обсягу робіт.</h2></div><div><p>Ми не ставимо на сайті вигадані «від» без огляду. Після короткої консультації можна зрозуміти реальний обсяг роботи й домовитися про час.</p><Link className="text-link" to="/kontakty">Перейти до контактів <ArrowRight size={16} aria-hidden="true" /></Link></div></div>
      </section>
      <PageBooking />
    </>
  )
}
