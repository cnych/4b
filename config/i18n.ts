export const languages = ['en', 'zh', 'ja', 'ko'] as const
export type Lang = (typeof languages)[number]
export const defaultLang = 'en'

export const languageConfig = {
  en: {
    name: 'English',
    dir: 'ltr',
  },
  zh: {
    name: '中文',
    dir: 'ltr',
  },
  ja: {
    name: '日本語',
    dir: 'ltr',
  },
  ko: {
    name: '한국어',
    dir: 'ltr',
  },
} 