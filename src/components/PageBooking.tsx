import { Phone } from 'lucide-react'
import { business } from '../content'
import { BookingForm } from './BookingForm'

export function PageBooking() {
  return (
    <section className="section section--booking" id="zapis">
      <div className="container booking-section">
        <div className="booking-section__intro">
          <p className="eyebrow">Запис</p>
          <h2>Опишіть задачу — підготуємо розмову.</h2>
          <p>Залиште контакти й коротко напишіть, що потрібно зробити. Перед підтвердженням уточнимо деталі по телефону.</p>
          <a className="booking-section__phone" href={business.phoneHref}><Phone size={19} aria-hidden="true" />{business.phone}</a>
        </div>
        <BookingForm />
      </div>
    </section>
  )
}
