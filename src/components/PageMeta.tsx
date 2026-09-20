import { useEffect } from 'react'

export function PageMeta({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title
    const meta = document.querySelector('meta[name="description"]')
    meta?.setAttribute('content', description)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [title, description])

  return null
}
