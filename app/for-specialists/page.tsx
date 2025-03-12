import { Button } from '@/components/ui/button'
import Link from 'next/link'

const clubs = [
  {
    id: 1,
    title: 'LIVE LIFE клуб',
    description: 'Профессиональное сообщество психологов и психотерапевтов. Регулярные встречи, обмен опытом, супервизии и мастер-классы.',
    benefits: [
      'Регулярные встречи и нетворкинг',
      'Профессиональная поддержка и супервизии',
      'Доступ к методическим материалам',
      'Возможность участия в проектах центра'
    ]
  },
  {
    id: 2,
    title: 'Клуб конфликтологов',
    description: 'Сообщество профессионалов в области конфликтологии и медиации. Обсуждение кейсов, обмен опытом, совместные проекты.',
    benefits: [
      'Разбор сложных случаев',
      'Обмен практическим опытом',
      'Участие в исследовательских проектах',
      'Доступ к базе знаний по конфликтологии'
    ]
  }
]

export default function ForSpecialists() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Для специалистов</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Присоединяйтесь к профессиональному сообществу психологов и конфликтологов
          </p>
        </div>
      </section>

      {/* Clubs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {clubs.map((club) => (
                <div key={club.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-2xl font-semibold mb-4">{club.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {club.description}
                    </p>
                    <h3 className="text-lg font-semibold mb-4">Преимущества:</h3>
                    <ul className="space-y-2 mb-8">
                      {club.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                          <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link href="/contact">Присоединиться</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Сотрудничество</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Мы открыты к сотрудничеству с профессиональными психологами, психотерапевтами и конфликтологами. 
              Если вы разделяете наши ценности и хотите присоединиться к команде, свяжитесь с нами.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="outline">
                <Link href="/contact">Связаться с нами</Link>
              </Button>
              <Button asChild>
                <Link href="/about">Узнать больше о нас</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Требования к специалистам</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Образование</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Высшее профильное образование (психология, конфликтология)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Дополнительное профессиональное образование
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Сертификаты о повышении квалификации
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Опыт</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Не менее 3 лет практической работы
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Опыт индивидуального консультирования
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Регулярное прохождение супервизий
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 