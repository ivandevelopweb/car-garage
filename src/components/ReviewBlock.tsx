import { ArrowUpRight, Star } from 'lucide-react'
import { business, review } from '../content'

export function ReviewBlock() {
  return (
    <div className="review-block">
      <div className="review-score"><strong>{business.rating}</strong><div><span className="stars" aria-label="4,3 з 5"><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /></span><span>{business.reviewCount}</span></div></div>
      <blockquote>“{review.quote}”</blockquote>
      <div className="review-meta"><span>{review.author}</span><span>{review.source} · 5★</span></div>
      <a className="text-link" href={business.mapsUrl} target="_blank" rel="noreferrer">Переглянути картку <ArrowUpRight size={16} aria-hidden="true" /></a>
    </div>
  )
}
