import { ConsultationForm } from '@/components/ConsultationForm'

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Записаться на консультацию</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Мы готовы помочь вам начать путь к счастливой жизни
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Адрес</h3>
                    <p className="text-gray-600 dark:text-gray-300">Санкт-Петербург</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <a href="mailto:konflict.advisory.service@gmail.com" className="text-purple-600 hover:text-purple-700">
                      konflict.advisory.service@gmail.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                    <a href="https://wa.me/79650181944" className="text-purple-600 hover:text-purple-700">
                      8 (965) 018-19-44
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">Мы в социальных сетях</h2>
                <div className="space-y-4">
                  <div>
                    <a href="https://vk.com/your_page" className="flex items-center text-purple-600 hover:text-purple-700">
                      <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.709-1.033-1.005-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.569c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.041-2.763-5.321-2.763-5.795 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.847 2.442 2.27 4.578 2.864 4.578.22 0 .322-.102.322-.66V9.319c-.068-1.186-.695-1.287-.695-1.709 0-.203.17-.407.44-.407h2.747c.372 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.27-1.422 2.17-3.61 2.17-3.61.119-.254.305-.491.728-.491h1.744c.525 0 .644.271.525.643-.22 1.032-2.374 4.09-2.374 4.09-.186.305-.254.44 0 .78.186.254.796.779 1.202 1.253.745.847 1.32 1.558 1.473 2.049.17.474-.085.711-.576.711z"/>
                      </svg>
                      VK
                    </a>
                  </div>
                  <div>
                    <a href="https://instagram.com/your_page" className="flex items-center text-purple-600 hover:text-purple-700">
                      <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 