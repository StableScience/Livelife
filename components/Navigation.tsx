"use client"

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const mainLinks = [
    { href: '/about', label: 'О НАС' },
    { 
      href: '/services',
      label: 'УСЛУГИ И ЦЕНЫ',
      submenu: [
        { href: '/services/individual', label: 'Индивидуальные консультации' },
        { href: '/services/group', label: 'Групповые занятия' },
        { href: '/services/self-help', label: 'Программы для самопомощи' }
      ]
    },
    { href: '/specialists', label: 'НАШИ СПЕЦИАЛИСТЫ' },
    {
      href: '/for-specialists',
      label: 'ДЛЯ СПЕЦИАЛИСТОВ',
      submenu: [
        { href: '/for-specialists/club', label: 'LIVE LIFE клуб' },
        { href: '/for-specialists/conflict', label: 'Клуб конфликтологов' }
      ]
    },
    { href: '/blog', label: 'БЛОГ' },
    { href: '/location', label: 'РАСПОЛОЖЕНИЕ' }
  ]

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-purple-600">
              LIVE LIFE
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {mainLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link 
                  href={link.href}
                  className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Button asChild>
              <Link href="/contact">
                Записаться на консультацию
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 dark:text-gray-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 