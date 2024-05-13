import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const IGNORE_KEYWORD_REG = /[\s-_\.]/g

export function transformAppKeyWords(app: AppItem): void {
  if (!Array.isArray(app.keywords) || !app.keywords.length) {
    app.keywords = [app.name]
  } else {
    app.keywords = app.keywords.map(key => key.toLowerCase().replace(IGNORE_KEYWORD_REG, ''))
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const loadStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : defaultValue
  } catch (_) {
    return defaultValue
  }
}

export const saveStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value))
}
