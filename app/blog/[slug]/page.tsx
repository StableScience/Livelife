import Image from 'next/image'
import Link from 'next/link'

export default function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Article Header */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/blog/tech-stack.jpg"
            alt="Article header"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <div className="flex items-center justify-center space-x-4 text-sm mb-4">
            <span>15 марта 2024</span>
            <span>•</span>
            <span>Разработка</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Как выбрать правильный стек технологий для вашего проекта
          </h1>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-sm">JD</span>
              </div>
              <span>Джон Доу</span>
            </div>
            <span>•</span>
            <span>Время чтения: 8 мин</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none">
                <p>
                  Выбор правильного стека технологий для вашего проекта - это критически важное решение,
                  которое может повлиять на успех всего предприятия. В этой статье мы рассмотрим основные
                  факторы, которые следует учитывать при выборе технологий.
                </p>

                <h2>1. Требования проекта</h2>
                <p>
                  Первым шагом в выборе технологий должно быть четкое понимание требований вашего проекта.
                  Рассмотрите следующие аспекты:
                </p>
                <ul>
                  <li>Масштаб проекта</li>
                  <li>Ожидаемая нагрузка</li>
                  <li>Требования к безопасности</li>
                  <li>Необходимость масштабирования</li>
                </ul>

                <h2>2. Опыт команды</h2>
                <p>
                  Важно учитывать опыт и навыки вашей команды разработчиков. Выбор технологий, с которыми
                  команда уже знакома, может значительно ускорить процесс разработки и снизить количество
                  ошибок.
                </p>

                <h2>3. Сообщество и поддержка</h2>
                <p>
                  Технологии с активным сообществом и хорошей документацией могут значительно упростить
                  процесс разработки и решения проблем. Рассмотрите следующие факторы:
                </p>
                <ul>
                  <li>Размер сообщества</li>
                  <li>Качество документации</li>
                  <li>Частота обновлений</li>
                  <li>Доступность ресурсов</li>
                </ul>

                <h2>4. Производительность и масштабируемость</h2>
                <p>
                  При выборе технологий важно учитывать их производительность и способность к масштабированию.
                  Это особенно важно для проектов, которые планируют расти в будущем.
                </p>

                <h2>Заключение</h2>
                <p>
                  Выбор технологий - это сложное решение, которое требует тщательного анализа всех факторов.
                  Не существует универсального решения, подходящего для всех проектов. Важно выбирать
                  технологии, которые лучше всего подходят для ваших конкретных потребностей.
                </p>
              </article>

              {/* Share Buttons */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-lg font-semibold mb-4">Поделиться статьей</h3>
                <div className="flex space-x-4">
                  <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Info */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-semibold">JD</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Джон Доу</h3>
                    <p className="text-sm text-gray-500">Старший разработчик</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Эксперт по веб-разработке с более чем 10-летним опытом. Специализируется на создании
                  масштабируемых веб-приложений и оптимизации производительности.
                </p>
              </div>

              {/* Related Posts */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4">Похожие статьи</h3>
                <ul className="space-y-4">
                  {relatedPosts.map((post, index) => (
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

const relatedPosts = [
  {
    title: 'Топ-10 трендов веб-разработки в 2024 году',
    image: '/blog/web-trends.jpg',
    date: '10 марта 2024',
    slug: 'web-development-trends-2024',
  },
  {
    title: 'Оптимизация производительности веб-приложений',
    image: '/blog/performance.jpg',
    date: '5 марта 2024',
    slug: 'web-app-performance-optimization',
  },
  {
    title: 'Безопасность в современной веб-разработке',
    image: '/blog/security.jpg',
    date: '1 марта 2024',
    slug: 'web-security-basics',
  },
] 