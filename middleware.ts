import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { languages, defaultLang } from '@/config/i18n'

export function middleware(request: NextRequest) {
  // 获取当前路径
  const pathname = request.nextUrl.pathname

  // 检查是否为静态文件
  if (pathname.match(/\.(jpg|jpeg|png|gif|ico|css|js|svg)$/i)) {
    return NextResponse.next()
  }

  // 获取语言偏好
  const preferredLanguage = request.cookies.get('preferred_language')?.value

  // 检查当前路径是否有语言前缀
  const currentLangMatch = pathname.match(new RegExp(`^/(${languages.join('|')})/`))
  if (currentLangMatch) {
    const currentLang = currentLangMatch[1]
    // 如果当前语言与偏好语言不同，则重定向
    if (preferredLanguage && preferredLanguage !== currentLang) {
      const newPath = pathname.replace(`/${currentLang}/`, preferredLanguage === defaultLang ? '/' : `/${preferredLanguage}/`)
      console.log('newPath=', newPath)
      return NextResponse.redirect(new URL(newPath, request.url))
    }
    return NextResponse.next()
  }

  // 如果有保存的语言偏好且不是英文，添加语言前缀
  if (preferredLanguage && languages.includes(preferredLanguage as any) && preferredLanguage !== defaultLang) {
    return NextResponse.redirect(new URL(`/${preferredLanguage}${pathname}`, request.url))
  }

  // 如果是英文或没有匹配的语言，不添加语言前缀
  return NextResponse.next()
}

export const config = {
  // 匹配所有路径
  matcher: '/:path*'
}