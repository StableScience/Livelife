import Image from 'next/image'
import Link from 'next/link'

export default function CategoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Category Header */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/blog/category-bg.jpg"
            alt="Category background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Разработка</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Статьи и руководства по веб-разработке
          </p>
        </div>
      </section>

      {/* Category Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categoryPosts.map((post, index) => (
                  <article key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.category}</span>
                      </div>
                      <h2 className="text-xl font-semibold mb-2">
                        <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary hover:text-primary/80 font-medium"
                      >
                        Читать далее →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="w-10 h-10 rounded-lg bg-white border flex items-center justify-center hover:bg-gray-50">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center">
                    1
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-white border flex items-center justify-center hover:bg-gray-50">
                    2
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-white border flex items-center justify-center hover:bg-gray-50">
                    3
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-white border flex items-center justify-center hover:bg-gray-50">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Category Info */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">О категории</h3>
                <p className="text-gray-600">
                  В этой категории мы публикуем статьи о веб-разработке, включая руководства,
                  советы и лучшие практики. Здесь вы найдете информацию о современных
                  технологиях, фреймворках и инструментах разработки.
                </p>
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4">Популярные статьи</h3>
                <ul className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-start space-x-4 group"
                      >
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover:text-primary line-clamp-2">
                            {post.title}
                          </h4>
                          <span className="text-sm text-gray-500">{post.date}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const categoryPosts = [
  {
    title: 'Как выбрать правильный стек технологий для вашего проекта',
    excerpt: 'Подробное руководство по выбору технологий для вашего следующего веб-проекта.',
    image: '/blog/tech-stack.jpg',
    date: '15 марта 2024',
    category: 'Разработка',
    slug: 'how-to-choose-tech-stack',
  },
  {
    title: 'Основы React: Компоненты и хуки',
    excerpt: 'Изучите основы React и начните создавать современные веб-приложения.',
    image: '/blog/react-basics.jpg',
    date: '12 марта 2024',
    category: 'Разработка',
    slug: 'react-basics-components-hooks',
  },
  {
    title: 'TypeScript: Преимущества и лучшие практики',
    excerpt: 'Почему стоит использовать TypeScript и как правильно его применять.',
    image: '/blog/typescript.jpg',
    date: '10 марта 2024',
    category: 'Разработка',
    slug: 'typescript-benefits-best-practices',
  },
  {
    title: 'Next.js 14: Что нового?',
    excerpt: 'Обзор новых возможностей и улучшений в Next.js 14.',
    image: '/blog/nextjs-14.jpg',
    date: '8 марта 2024',
    category: 'Разработка',
    slug: 'nextjs-14-whats-new',
  },
]

const popularPosts = [
  {
    title: 'Как выбрать правильный стек технологий для вашего проекта',
    image: '/blog/tech-stack.jpg',
    date: '15 марта 2024',
    slug: 'how-to-choose-tech-stack',
  },
  {
    title: 'Основы React: Компоненты и хуки',
    image: '/blog/react-basics.jpg',
    date: '12 марта 2024',
    slug: 'react-basics-components-hooks',
  },
  {
    title: 'TypeScript: Преимущества и лучшие практики',
    image: '/blog/typescript.jpg',
    date: '10 марта 2024',
    slug: 'typescript-benefits-best-practices',
  },
] 