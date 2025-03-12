import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function SelfHelpService() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Программы для самопомощи</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Структурированные программы для самостоятельной работы с поддержкой специалиста
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">О программах самопомощи</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Программы самопомощи - это структурированные курсы, которые позволяют вам работать над собой в удобном темпе с поддержкой специалиста. Вы получаете доступ к материалам и регулярные консультации для отслеживания прогресса.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Формат работы</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Доступ к материалам: 24/7</li>
                <li>Поддержка специалиста: онлайн</li>
                <li>Длительность программы: 4-8 недель</li>
                <li>Стоимость: от 1500 ₽</li>
              </ul>
              <div className="mt-12 text-center">
                <Button asChild size="lg">
                  <Link href="/contact">Записаться на программу</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 