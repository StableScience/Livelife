import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function IndividualService() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Индивидуальные консультации</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Профессиональная поддержка в решении ваших задач
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">О консультациях</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Индивидуальные консультации - это личные встречи с психологом, где вы можете обсудить волнующие вас вопросы в безопасной и конфиденциальной обстановке.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Формат работы</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Продолжительность сессии: 50 минут</li>
                <li>Периодичность: 1-2 раза в неделю</li>
                <li>Формат: очно в Санкт-Петербурге или онлайн</li>
                <li>Стоимость: от 3000 ₽ за сессию</li>
              </ul>
              <div className="mt-12 text-center">
                <Button asChild size="lg">
                  <Link href="/contact">Записаться на консультацию</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 