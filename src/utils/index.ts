export const IGNORE_KEYWORD_REG = /[ -_.]/g

export function transformAppKeyWords(app: AppItem): void {
  if (!Array.isArray(app.keywords) || !app.keywords.length) {
    app.keywords = [app.name]
  } else {
    app.keywords = app.keywords.map(key => key.toLowerCase().replace(IGNORE_KEYWORD_REG, ''))
  }
}
