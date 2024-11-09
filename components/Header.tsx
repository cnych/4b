'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { languages, defaultLang, type Lang, languageConfig } from '@/config/i18n'
import { getLocalizedPath } from '@/utils/links'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState<Lang>(defaultLang)
  const pathname = usePathname()

  // 在组件加载时从 localStorage 读取语言设置
  useEffect(() => {
    const savedLang = localStorage.getItem('preferred_language')
    if (savedLang && languages.includes(savedLang as Lang)) {
      setCurrentLang(savedLang as Lang)
    }
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Articles', href: '/posts' },
  ]

  // 处理语言切换
  const handleLanguageChange = (lang: Lang) => {
    setCurrentLang(lang)
    localStorage.setItem('preferred_language', lang)
    document.cookie = `preferred_language=${lang}; path=/; max-age=31536000` // 一年有效期
    
    // 根据当前路径生成新的URL
    let newPath = pathname
    if (lang === defaultLang) {
      newPath = pathname.replace(/^\/[a-z]{2}/, '')
    } else {
      if (!pathname.startsWith(`/${currentLang}`)) {
        newPath = `/${lang}${pathname}`
      } else {
        newPath = pathname.replace(/^\/[a-z]{2}/, `/${lang}`)
      }
    }
    
    window.location.href = newPath
  }

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              href={getLocalizedPath('/', currentLang)} 
              aria-label="4B Movement"
              className="text-2xl font-bold text-gray-900"
            >
              4B Movement
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={getLocalizedPath(item.href, currentLang)}
                className={`text-base font-medium ${
                  pathname === getLocalizedPath(item.href, currentLang)
                    ? 'text-purple-600'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Language Selector */}
            <div className="relative ml-4">
              <select
                value={currentLang}
                onChange={(e) => handleLanguageChange(e.target.value as Lang)}
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm font-medium text-gray-700 hover:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {languageConfig[lang].name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            {/* Mobile Language Selector */}
            <select
              value={currentLang}
              onChange={(e) => handleLanguageChange(e.target.value as Lang)}
              className="mr-4 appearance-none bg-white border border-gray-300 rounded-md py-1.5 pl-2 pr-6 text-sm font-medium text-gray-700"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang.toUpperCase()}
                </option>
              ))}
            </select>

            <button
              type="button"
              className="text-gray-500 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={getLocalizedPath(item.href, currentLang)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === getLocalizedPath(item.href, currentLang)
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 