import { defaultLang, type Lang } from '@/config/i18n'

export function getLocalizedPath(path: string, lang: Lang): string {
  // 如果是默认语言（英文），直接返回原始路径
  if (lang === defaultLang) {
    return path
  }
  
  // 其他语言添加语言前缀
  return `/${lang}${path}`
} 