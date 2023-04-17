import framework from './01-framework'
import ui_design from './02-ui_design'
import library from './03-library'
import html_css from './04-html_css'
import nodejs from './05-nodejs'
import other from './06-other'
import website from './07-website'

const cateMap = {
  framework,
  ui_design,
  library,
  html_css,
  nodejs,
  other,
  website,
}

function getModules(cates: (keyof typeof cateMap)[]): CateItem[] {
  return cates.map(cate =>  ({
    title: cate.replace('_', '/'),
    children: cateMap[cate],
  }))
}

export default <CateItem[]> getModules([ 'framework', 'ui_design', 'library', 'html_css', 'nodejs', 'other', 'website' ])
