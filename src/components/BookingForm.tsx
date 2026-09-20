import { ArrowRight, Check, Phone } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { business, services } from '../content'

export function BookingForm({ dark = false }: { dark?: boolean }) {
  const [sent, setSent] = useState(false)
  const [fileCount, setFileCount] = useState(0)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  function handleFilesChange(event: ChangeEvent<HTMLInputElement>) {
    setFileCount(event.target.files?.length ?? 0)
  }

  return (
    <div className={`booking-form ${dark ? 'booking-form--dark' : ''}`}>
      {sent ? (
        <div className="booking-success" role="status">
          <span className="booking-success__icon"><Check size={21} aria-hidden="true" /></span>
          <h3>Заявку підготовлено</h3>
          <p>Для підтвердження запису зателефонуйте до майстерні — так ми одразу уточнимо модель авто та обсяг робіт.</p>
          <a className="button button--accent" href={business.phoneHref}><Phone size={17} aria-hidden="true" />{business.phone}</a>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-heading">
            <span className="form-label">Коротка заявка</span>
            <h3>Розкажіть, що потрібно зробити</h3>
          </div>
          <div className="form-grid">
            <label><span>Ім’я</span><input name="name" type="text" autoComplete="name" placeholder="Ваше ім’я" required /></label>
            <label><span>Телефон</span><input name="phone" type="tel" autoComplete="tel" placeholder="+380 __ ___ __ __" required /></label>
            <label><span>Послуга</span><select name="service" defaultValue=""><option value="" disabled>Оберіть напрям</option>{services.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}</select></label>
            <label className="form-field--wide"><span>Фото авто <small>необов’язково</small></span><input name="photos" type="file" accept="image/*" multiple onChange={handleFilesChange} /><small className="form-file-status">{fileCount > 0 ? `Додано фото: ${fileCount}` : 'Можна додати кілька фото автомобіля'}</small></label>
            <label className="form-field--wide"><span>Коментар <small>необов’язково</small></span><textarea name="comment" rows={3} placeholder="Марка, модель і коротко про задачу" /></label>
          </div>
          <div className="form-footer">
            <p>Форма допомагає підготувати звернення. Підтвердження — телефоном.</p>
            <button className="button button--accent" type="submit">Надіслати запит <ArrowRight size={17} aria-hidden="true" /></button>
          </div>
        </form>
      )}
    </div>
  )
}
