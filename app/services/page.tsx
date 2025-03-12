import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  {
    id: 1,
    title: 'Индивидуальные консультации',
    description: 'Персональные консультации с опытным психологом для решения личных проблем и достижения целей.',
    price: 'от 3000 ₽',
    duration: '50 минут',
    features: [
      'Индивидуальный подход',
      'Конфиденциальность',
      'Гибкий график',
      'Онлайн или очно'
    ],
    link: '/services/individual'
  },
  {
    id: 2,
    title: 'Групповые занятия',
    description: 'Терапевтические группы и тренинги для развития навыков коммуникации и самопознания.',
    price: 'от 2000 ₽',
    duration: '90 минут',
    features: [
      'Работа в группе',
      'Обмен опытом',
      'Практические упражнения',
      'Поддержка группы'
    ],
    link: '/services/group'
  },
  {
    id: 3,
    title: 'Программы для самопомощи',
    description: 'Структурированные программы для самостоятельной работы над собой с поддержкой специалиста.',
    price: 'от 1500 ₽',
    duration: 'Индивидуально',
    features: [
      'Гибкий график',
      'Материалы для самостоятельной работы',
      'Онлайн-поддержка',
      'Доступ к базе знаний'
    ],
    link: '/services/self-help'
  }
]

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Услуги и цены</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Профессиональная психологическая помощь для каждого
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-baseline mb-6">
                      <span className="text-3xl font-bold text-purple-600">{service.price}</span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">/ {service.duration}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                          <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link href={service.link}>Подробнее</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Как проходят консультации?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Очные консультации</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Консультации проходят в Санкт-Петербурге
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Комфортная обстановка для беседы
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Полная конфиденциальность
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Онлайн консультации</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Zoom, Skype или WhatsApp
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Удобно из любой точки мира
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Гибкий график
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы начать?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Запишитесь на консультацию или задайте вопрос нашим специалистам
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Записаться на консультацию</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Задать вопрос</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 