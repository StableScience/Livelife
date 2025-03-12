import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            LIVE LIFE
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Ваш путь к собственной счастливой жизни начинается здесь!
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
            <Link href="/contact">Записаться на консультацию</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">О НАС</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Добро пожаловать на "LIVE LIFE" - место, где ваши мечты становятся реальностью. Здесь вы сможете начать жить так, как вы этого хотите. Мы в LIVE LIFE стремимся вдохновить и помочь вам исследовать себя, разрешить большинство противоречий и привести вашу жизнь к гармонии.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Наша цель - создать пространство, в котором каждый человек может открыть для себя новые возможности и переосмыслить свой стиль жизни.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Button asChild variant="outline">
                <Link href="/about">Узнать подробнее</Link>
              </Button>
              <Button asChild>
                <Link href="/specialists">Выбрать специалиста</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ЧТО У НАС ЕСТЬ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <Button asChild variant="link" className="text-purple-600">
                  <Link href={service.link}>Подробнее</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Наши контакты
          </h2>
          <div className="flex flex-col items-center gap-4 text-lg">
            <p>Эл. почта: konflict.advisory.service@gmail.com</p>
            <p>WhatsApp: 8 (965) 018-19-44</p>
            <div className="flex gap-4 mt-4">
              <a href="https://vk.com/spb_no_conflict" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                ВКонтакте
              </a>
              <a href="https://www.instagram.com/livelife_psy/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: 'КОНСУЛЬТАЦИИ',
    description: 'Индивидуальные консультации с опытными специалистами',
    link: '/services/consultations',
    icon: (
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'ГРУППОВЫЕ ЗАНЯТИЯ',
    description: 'Терапевтические группы и тренинги',
    link: '/services/group',
    icon: (
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'ПРОГРАММЫ САМОПОМОЩИ',
    description: 'Материалы для самостоятельной работы',
    link: '/services/self-help',
    icon: (
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'ДЛЯ СПЕЦИАЛИСТОВ',
    description: 'LIVE LIFE клуб и Клуб конфликтологов',
    link: '/for-specialists',
    icon: (
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
] 