import Link from 'next/link'
import { Button } from '@/components/ui/button'

const blogPosts = [
  {
    id: 1,
    title: 'Как справиться со стрессом: практические советы',
    excerpt: 'Стресс стал неотъемлемой частью современной жизни. В этой статье мы рассмотрим эффективные методы борьбы со стрессом и техники релаксации.',
    date: '15 марта 2024',
    category: 'Самопомощь',
    slug: 'how-to-deal-with-stress'
  },
  {
    id: 2,
    title: 'Эмоциональный интеллект: путь к лучшему пониманию себя',
    excerpt: 'Что такое эмоциональный интеллект и почему он важен? Разбираемся в ключевых компонентах EQ и способах его развития.',
    date: '10 марта 2024',
    category: 'Психология',
    slug: 'emotional-intelligence'
  },
  {
    id: 3,
    title: 'Конфликты в семье: как найти общий язык',
    excerpt: 'Семейные конфликты - явление частое, но разрешимое. Рассказываем о техниках медиации и способах улучшения коммуникации в семье.',
    date: '5 марта 2024',
    category: 'Отношения',
    slug: 'family-conflicts'
  },
  {
    id: 4,
    title: 'Профессиональное выгорание: признаки и профилактика',
    excerpt: 'Как распознать симптомы профессионального выгорания и что делать, чтобы его предотвратить? Советы психолога.',
    date: '1 марта 2024',
    category: 'Карьера',
    slug: 'professional-burnout'
  }
]

const categories = [
  { name: 'Все', slug: 'all' },
  { name: 'Психология', slug: 'psychology' },
  { name: 'Самопомощь', slug: 'self-help' },
  { name: 'Отношения', slug: 'relationships' },
  { name: 'Карьера', slug: 'career' }
]

const popularPosts = [
  {
    title: 'Как выбрать правильный стек технологий для вашего проекта',
    date: '15 марта 2024',
    slug: 'how-to-choose-tech-stack',
  },
  {
    title: 'Топ-10 трендов веб-разработки в 2024 году',
    date: '10 марта 2024',
    slug: 'web-development-trends-2024',
  },
  {
    title: 'Оптимизация производительности веб-приложений',
    date: '5 марта 2024',
    slug: 'web-app-performance-optimization',
  },
]

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Блог</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Статьи о психологии, самопомощи и личностном росте
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['Все', 'Психология', 'Самопомощь', 'Отношения', 'Карьера'].map((category) => (
                <Button
                  key={category}
                  variant={category === 'Все' ? 'default' : 'outline'}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                      <span className="text-sm text-purple-600 dark:text-purple-400">{post.category}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-4">
                      <Link href={`/blog/${post.slug}`} className="hover:text-purple-600 dark:hover:text-purple-400">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {post.excerpt}
                    </p>
                    <Button asChild variant="link" className="text-purple-600 p-0">
                      <Link href={`/blog/${post.slug}`}>
                        Читать далее
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 