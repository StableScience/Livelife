import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function GroupService() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Групповые занятия</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Развитие и поддержка в кругу единомышленников
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">О групповых занятиях</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Групповые занятия предоставляют уникальную возможность работать над собой в безопасной и поддерживающей атмосфере группы. Это эффективный способ развития коммуникативных навыков и получения обратной связи от других участников.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Формат работы</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Продолжительность занятия: 90 минут</li>
                <li>Количество участников: 6-8 человек</li>
                <li>Формат: очно в Санкт-Петербурге</li>
                <li>Стоимость: от 2000 ₽ за занятие</li>
              </ul>
              <div className="mt-12 text-center">
                <Button asChild size="lg">
                  <Link href="/contact">Записаться на групповое занятие</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 