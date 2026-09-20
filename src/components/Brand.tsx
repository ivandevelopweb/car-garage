import { Link } from 'react-router-dom'

type BrandProps = {
  compact?: boolean
  light?: boolean
}

export function Brand({ compact = false, light = false }: BrandProps) {
  return (
    <Link className={`brand ${light ? 'brand--light' : ''}`} to="/" aria-label="Автозвук, Тонировка — головна">
      <svg className="brand__mark" viewBox="0 0 96 64" aria-hidden="true">
        <path d="M8 45c0-5 4-9 9-9h7l8-13c1-2 4-4 7-4h24c4 0 8 2 11 5l8 9h6c5 0 8 4 8 9v3H8v-2Z" fill={light ? '#ffffff' : '#201f1f'} />
        <path d="M31 24h29c3 0 6 1 8 3l5 6H27l4-9Z" fill={light ? '#201f1f' : '#ffffff'} />
        <circle cx="26" cy="46" r="7" fill={light ? '#201f1f' : '#ffffff'} stroke={light ? '#ffffff' : '#201f1f'} strokeWidth="3" />
        <circle cx="75" cy="46" r="7" fill={light ? '#201f1f' : '#ffffff'} stroke={light ? '#ffffff' : '#201f1f'} strokeWidth="3" />
        <path d="M42 27h5v7h-5zm10 0h5v7h-5z" fill="#ffc803" />
        <path d="M4 28c5-4 8-4 12 0M2 22c7-6 12-6 18 0" fill="none" stroke="#ffc803" strokeLinecap="round" strokeWidth="3" />
      </svg>
      {!compact && <span className="brand__words"><strong>Автозвук,</strong><span>Тонировка</span></span>}
    </Link>
  )
}
