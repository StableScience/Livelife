import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">LiveLife</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Создаем инновационные цифровые решения для вашего бизнеса
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Блог
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">Веб-разработка</li>
              <li className="text-gray-600 dark:text-gray-300">Мобильная разработка</li>
              <li className="text-gray-600 dark:text-gray-300">UI/UX Дизайн</li>
              <li className="text-gray-600 dark:text-gray-300">Консалтинг</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">info@example.com</li>
              <li className="text-gray-600 dark:text-gray-300">+7 (123) 456-78-90</li>
              <li className="text-gray-600 dark:text-gray-300">
                ул. Примерная, 123<br />
                Город, 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} LiveLife. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
} 