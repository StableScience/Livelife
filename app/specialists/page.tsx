import { Button } from '@/components/ui/button'
import Link from 'next/link'

const specialists = [
  {
    id: 1,
    name: 'Анна Петрова',
    title: 'Психолог-консультант',
    specialization: 'Семейная психология, конфликтология',
    experience: '10 лет опыта',
    education: [
      'Санкт-Петербургский государственный университет, факультет психологии',
      'Институт практической психологии "Иматон"'
    ],
    description: 'Специализируюсь на семейном консультировании и разрешении конфликтов. Помогаю парам и семьям найти общий язык и восстановить гармонию в отношениях.'
  },
  {
    id: 2,
    name: 'Михаил Соколов',
    title: 'Клинический психолог',
    specialization: 'Когнитивно-поведенческая терапия',
    experience: '8 лет опыта',
    education: [
      'Московский государственный университет, факультет психологии',
      'Институт когнитивно-поведенческой терапии'
    ],
    description: 'Работаю с тревожными расстройствами, депрессией и стрессом. Использую современные методики КПТ для достижения устойчивых результатов.'
  },
  {
    id: 3,
    name: 'Елена Иванова',
    title: 'Психолог-консультант',
    specialization: 'Личностный рост, карьерное консультирование',
    experience: '12 лет опыта',
    education: [
      'РГПУ им. А.И. Герцена, факультет психологии',
      'Высшая школа психологии'
    ],
    description: 'Помогаю в вопросах профессионального развития, самореализации и построения карьеры. Работаю с темами личностного роста и самопознания.'
  }
]

export default function Specialists() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Наши специалисты</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Профессиональная команда психологов и конфликтологов
          </p>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-12">
              {specialists.map((specialist) => (
                <div key={specialist.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <h2 className="text-2xl font-semibold mb-2">{specialist.name}</h2>
                        <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">{specialist.title}</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{specialist.experience}</p>
                        <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">Специализация:</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{specialist.specialization}</p>
                        <Button asChild className="w-full">
                          <Link href="/contact">Записаться на консультацию</Link>
                        </Button>
                      </div>
                      <div className="md:w-2/3">
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold mb-2">Образование</h3>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                            {specialist.education.map((edu, index) => (
                              <li key={index}>{edu}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">О специалисте</h3>
                          <p className="text-gray-600 dark:text-gray-300">{specialist.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы начать работу со специалистом?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Запишитесь на консультацию прямо сейчас и сделайте первый шаг к изменениям в вашей жизни
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Записаться на консультацию</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 