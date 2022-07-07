const PATH_REG = /.*-([a-zA-Z_]+?)\.ts$/

function getModules(context: Record<string, AppItem[]>): CateItem[] {
  return Object.keys(context).map((path: string) => ({
    title: path.replace(PATH_REG, (_, $1) => $1.replace('_', '/')),
    children: context[path],
  }))
}

const context: Record<string, AppItem[]> = import.meta.importGlob(
  './modules/*.ts',
  {
    eager: true,
    import: 'default',
  },
)

export default <CateItem[]> getModules(context)
