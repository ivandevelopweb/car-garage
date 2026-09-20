import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { articles } from '../content'
import { PageMeta } from '../components/PageMeta'
import { PageBooking } from '../components/PageBooking'
import { ArticlePage } from './ArticlePage'
import { NotFoundPage } from './NotFoundPage'

export function MaterialTopicPage() {
  const { materialSlug } = useParams()
  const article = articles.find((item) => item.slug === materialSlug)

  if (!article) return <NotFoundPage />
  if (article.featured) return <ArticlePage />

  return (
    <>
      <PageMeta title={`${article.title} — Автозвук, Тонировка`} description={article.excerpt} />
      <section className="page-intro"><div className="container page-intro__inner"><div><Link className="back-link back-link--dark" to="/materialy"><ArrowLeft size={16} aria-hidden="true" />Усі матеріали</Link><p className="eyebrow">{article.tag}</p><h1>{article.title}</h1><p className="page-intro__copy">Ця тема вже підготовлена в структурі сайту, але повний матеріал додамо після уточнення реальних особливостей роботи майстерні.</p><Link className="button button--dark" to="/kontakty#zapis">Поставити питання <ArrowRight size={17} aria-hidden="true" /></Link></div><div className="page-intro__side"><span><BookOpen size={17} aria-hidden="true" />{article.readTime}</span><span>Корисний матеріал</span></div></div></section>
      <section className="section"><div className="container narrow-container"><div className="article-note"><strong>Поки що — анонс теми</strong><p>Ми залишаємо тут місце для корисного матеріалу без вигаданих деталей. Якщо потрібна відповідь уже зараз, зателефонуйте та опишіть автомобіль майстру.</p><Link className="text-link" to="/kontakty">Контакти та графік <ArrowRight size={16} aria-hidden="true" /></Link></div></div></section>
      <PageBooking />
    </>
  )
}
