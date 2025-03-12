import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LiveLifeClub() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">LIVE LIFE клуб</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Профессиональное сообщество психологов и психотерапевтов
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                LIVE LIFE клуб - это профессиональное сообщество, где психологи и психотерапевты могут обмениваться опытом, получать поддержку коллег и развиваться профессионально.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4">Преимущества членства в клубе</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Регулярные встречи и нетворкинг с коллегами</li>
                <li>Профессиональная поддержка и супервизии</li>
                <li>Доступ к методическим материалам</li>
                <li>Возможность участия в проектах центра</li>
                <li>Совместные исследования и публикации</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Формат участия</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Ежемесячные очные встречи</li>
                <li>Онлайн-конференции и вебинары</li>
                <li>Закрытый чат для общения</li>
                <li>Библиотека материалов</li>
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