import { ArrowRight, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import { articles } from '../content'
import { PageIntro } from '../components/PageIntro'
import { PageBooking } from '../components/PageBooking'
import { PageMeta } from '../components/PageMeta'

export function MaterialsPage() {
  return (
    <>
      <PageMeta title="Корисні матеріали — Автозвук, Тонировка" description="Практичні матеріали про тонування, автозвук та додаткове обладнання для водіїв у Шостці." />
      <PageIntro eyebrow="Корисні матеріали" title="Поради перед записом" copy="Невеликий розділ без фабрики SEO-сторінок: одна повна стаття та кілька тем, які можна розвинути пізніше." action={{ label: 'До головної', to: '/' }} />
      <section className="section materials-page"><div className="container"><div className="article-index">{articles.map((article, index) => <Link className={`article-card ${index === 0 ? 'article-card--featured' : ''}`} key={article.slug} to={`/materialy/${article.slug}`}><span className="article-card__number">0{index + 1}</span><div><span className="material-card__meta">{article.tag} · {article.readTime}</span><h2>{article.title}</h2><p>{article.excerpt}</p><span className="text-link">{index === 0 ? 'Читати статтю' : 'Тема для майбутнього'} <ArrowRight size={16} aria-hidden="true" /></span></div><span className="article-card__icon"><BookOpen size={22} aria-hidden="true" /></span></Link>)}</div></div></section>
      <PageBooking />
    </>
  )
}
