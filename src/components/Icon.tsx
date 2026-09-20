import { CarFront, ShieldCheck, Speaker, Sun, Volume2, Wrench } from 'lucide-react'
import type { Service } from '../content'

export function ServiceIcon({ type }: { type: Service['icon'] }) {
  const icons = {
    tint: Sun,
    audio: Volume2,
    speaker: Speaker,
    equipment: Wrench,
  }
  const Icon = icons[type]
  return <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
}

export function DetailIcon({ type }: { type: 'car' | 'shield' }) {
  const Icon = type === 'car' ? CarFront : ShieldCheck
  return <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
}
