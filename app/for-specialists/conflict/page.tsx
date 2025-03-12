import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ConflictClub() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Клуб конфликтологов</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Сообщество профессионалов в области конфликтологии и медиации
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Клуб конфликтологов объединяет специалистов, работающих в области разрешения конфликтов и медиации. Это площадка для обмена опытом, обсуждения сложных случаев и профессионального развития.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4">Направления работы клуба</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Разбор сложных случаев из практики</li>
                <li>Обмен опытом медиации конфликтов</li>
                <li>Исследовательские проекты</li>
                <li>Развитие методологии конфликтологии</li>
                <li>Супервизии и поддержка коллег</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Формат участия</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Регулярные встречи клуба</li>
                <li>Онлайн-семинары и обсуждения</li>
                <li>Доступ к базе знаний</li>
                <li>Участие в исследованиях</li>
              </ul>

              <div className="mt-12 text-center">
                <Button asChild size="lg">
                  <Link href="/contact">Присоединиться к клубу</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 