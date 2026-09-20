import { ArrowUpRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export function MobileContactBar() {
  return (
    <div className="mobile-contact-bar">
      <Link to="/kontakty#zapis"><Phone size={18} aria-hidden="true" /><span>Зателефонувати</span></Link>
      <a href="#zapis"><ArrowUpRight size={18} aria-hidden="true" /><span>Записатися</span></a>
    </div>
  )
}
