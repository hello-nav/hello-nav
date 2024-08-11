const PATH_REG = /^.*\d{2}-(.*)\.ts$/

function getModules(context: Record<string, AppItem[]>): CateItem[] {
  return Object.keys(context).map((path: string) => ({
    title: path.replace(PATH_REG, (_, $1) => $1.replace('_', '/')),
    children: context[path].map(item => ({
      ...item,
      icon: getIconUrl(item.icon),
    })),
  }))
}

const context: Record<string, AppItem[]> = import.meta.importGlob('./module/*.ts', {
  eager: true,
  import: 'default',
})

function getIconUrl(filename: string): string {
  if (typeof window !== 'undefined') {
    return new URL(`../public/icons/${filename}`, import.meta.url).href
  } else {
    return `./icons/${filename}`
  }
}

export default <CateItem[]>getModules(context)
