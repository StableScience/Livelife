import { Button } from '@/components/ui/button'

export default function Location() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Расположение</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Мы находимся в Санкт-Петербурге
          </p>
        </div>
      </section>

      {/* Location Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-8">Как нас найти</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Мы проводим консультации в Санкт-Петербурге, а также онлайн через Zoom или Skype.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-semibold mb-4 text-center">Онлайн консультации</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      Мы проводим консультации через:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li>Zoom</li>
                      <li>Skype</li>
                      <li>WhatsApp</li>
                    </ul>
                    <p className="text-gray-600 dark:text-gray-300">
                      Выберите удобный для вас формат
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-semibold mb-4 text-center">Очные консультации</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      Санкт-Петербург
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Точный адрес сообщается после записи на консультацию
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="text-center mt-12">
                <h3 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    Email: konflict.advisory.service@gmail.com
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    WhatsApp: 8 (965) 018-19-44
                  </p>
                  <div className="flex justify-center space-x-6 mt-6">
                    <a href="https://vk.com/spb_no_conflict" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.709-1.033-1.01-1.49-1.145-1.745-1.145-.356 0-.458.102-.458.597v1.562c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.041-2.763-5.321-2.763-5.788 0-.255.102-.491.593-.491h1.744c.44 0 .61.237.78.796.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.743c.373 0 .508.186.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.27-1.422 2.18-3.609 2.18-3.609.119-.254.373-.491.847-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.202 1.253.745.847 1.32 1.558 1.473 2.05.17.475-.085.713-.576.713z"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/livelife_psy/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-12">
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <a href="/contact">Записаться на консультацию</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 