const PATH_REG = /^.*\d{2}-(.*)\.ts$/

function getModules(context: Record<string, AppItem[]>): CateItem[] {
  return Object.keys(context).map((path: string) => ({
    title: path.replace(PATH_REG, (_, $1) => $1.replace('_', '/')),
    children: context[path].map(item => ({
      ...item,
      icon: new URL(`./icons/${item.icon}`, import.meta.url).href,
    })),
  }))
}

const context: Record<string, AppItem[]> = import.meta.importGlob('./module/*.ts', {
  eager: true,
  import: 'default',
})

export default <CateItem[]>getModules(context)
