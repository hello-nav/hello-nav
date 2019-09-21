const PATH_REG = /\.\/\d+?-(.+?)\.ts/
const getModules = (context: __WebpackModuleApi.RequireContext): CateItem[] =>
  context
    .keys()
    .map((path: string) => ({
      title: path.replace(PATH_REG, '$1'),
      childrens: context(path).default
    }))

const context = require.context('./modules', true, /\.ts$/)
const libraryTree: CateItem[] = getModules(context)

export default libraryTree
