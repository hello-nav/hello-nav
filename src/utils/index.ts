export const IGNORE_KEYWORD_REG = /[ -.]/g

export function transformAppKeyWords(app: AppItem): void {
  if (!Array.isArray(app.keyWords) || !app.keyWords.length) {
    app.keyWords = [app.label]
  } else {
    app.keyWords = app.keyWords.map(key => key.toLowerCase().replace(IGNORE_KEYWORD_REG, ''))
  }
}
