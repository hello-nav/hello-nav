const PATH_REG = /\.\/\d+?-(.+?)\.js/
const getModules = context => context.keys().map(path => {
  return {
    title: path.replace(PATH_REG, '$1'),
    children: context(path).default
  }
})
const context = require.context('./data', true, /\.js$/)
const routes = getModules(context)

export default routes
