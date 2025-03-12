import Image from 'next/image'
import { getRandomPhoto, searchPhotos } from '@/lib/unsplash'
import Link from 'next/link'

async function getAboutImages() {
  const [teamImage, valuesImage] = await searchPhotos('business team office', 2);
  return { teamImage, valuesImage };
}

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">О нас</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Мы помогаем людям найти свой путь к счастливой и гармоничной жизни
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Наша миссия</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                LIVE LIFE - это пространство для тех, кто хочет изменить свою жизнь к лучшему. Мы создали место, где каждый может получить профессиональную поддержку и найти путь к решению своих проблем.
              </p>
              <p className="text-lg mb-6">
                Наша команда состоит из опытных специалистов в области психологии и конфликтологии. Мы используем современные методики и индивидуальный подход к каждому клиенту.
              </p>
              <p className="text-lg">
                Мы верим, что каждый человек заслуживает счастливой и гармоничной жизни, и готовы помочь вам на этом пути.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши принципы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{principle.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
          <div className="max-w-4xl mx-auto prose dark:prose-invert">
            <p className="text-lg text-center mb-8">
              Наша команда состоит из профессиональных психологов, конфликтологов и коучей с многолетним опытом работы. Каждый специалист имеет профильное образование и регулярно повышает свою квалификацию.
            </p>
            <div className="flex justify-center">
              <Link href="/specialists" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
                Познакомиться со специалистами
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const principles = [
  {
    title: 'Конфиденциальность',
    description: 'Мы гарантируем полную конфиденциальность всех консультаций и личной информации',
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Профессионализм',
    description: 'Все наши специалисты имеют профильное образование и богатый опыт работы',
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Индивидуальный подход',
    description: 'Мы разрабатываем индивидуальную стратегию работы для каждого клиента',
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
] 