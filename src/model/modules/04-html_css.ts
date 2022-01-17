import {
  requireImg,
} from '../utils'

const apps: AppItem[] = [{
  url: 'https://pugjs.org/',
  githubUrl: 'https://github.com/pugjs/pug',
  imgSrc: requireImg('pug.png'),
  keyWords: ['pug', 'html'],
  label: 'Pug',
}, {
  url: 'https://jade-lang.com/',
  imgSrc: requireImg('jade.png'),
  keyWords: ['jade', 'html'],
  label: 'Jade',
}, {
  url: 'https://posthtml.org/',
  githubUrl: 'https://github.com/posthtml/posthtml',
  imgSrc: requireImg('post-html.png'),
  keyWords: ['PostHTML'],
  label: 'PostHTML',
}, {
  url: 'http://sass-lang.com/',
  githubUrl: 'https://github.com/sass/sass',
  imgSrc: requireImg('sass.png'),
  keyWords: ['sass', 'css'],
  label: 'Sass',
}, {
  url: 'http://lesscss.org/',
  githubUrl: 'https://github.com/less/less-docs',
  imgSrc: requireImg('less.png'),
  keyWords: ['less', 'css'],
  label: 'Less',
}, {
  url: 'http://stylus-lang.com/',
  githubUrl: 'https://github.com/stylus/stylus/',
  imgSrc: requireImg('stylus.png'),
  keyWords: ['stylus', 'css'],
  label: 'Stylus',
  darkInvert: true,
}, {
  url: 'https://postcss.org/',
  githubUrl: 'https://github.com/postcss/postcss',
  imgSrc: requireImg('postcss.png'),
  keyWords: ['postcss', 'css'],
  label: 'Postcss',
}, {
  url: 'https://goober.rocks/',
  githubUrl: 'https://github.com/cristianbote/goober',
  imgSrc: requireImg('goober.png'),
  keyWords: ['goober', 'css'],
  label: 'Goober',
}, {
  url: 'https://purgecss.com/',
  githubUrl: 'https://github.com/FullHuman/purgecss',
  imgSrc: requireImg('purgecss.png'),
  keyWords: ['purgecss', 'css'],
  label: 'PurgeCSS',
  darkInvert: true,
}, {
  url: 'https://github.com/css-modules/css-modules',
  githubUrl: 'https://github.com/css-modules/css-modules',
  imgSrc: requireImg('css-modules.png'),
  keyWords: ['css-modules', 'css'],
  label: 'CSS Modules',
  darkInvert: true,
}, {
  url: 'https://cssinjs.org/',
  githubUrl: 'https://github.com/cssinjs/jss',
  imgSrc: requireImg('jss.png'),
  keyWords: ['jss', 'css'],
  label: 'JSS',
}, {
  url: 'https://emotion.sh/',
  githubUrl: 'https://github.com/emotion-js/emotion',
  imgSrc: requireImg('emotion.png'),
  keyWords: ['emotion', 'css'],
  label: 'Emotion',
}, {
  url: 'https://styled-components.com/',
  githubUrl: 'https://github.com/styled-components/styled-components',
  imgSrc: requireImg('styled-components.png'),
  keyWords: ['styled-components', 'css'],
  label: 'StyledComponents',
}, {
  url: 'https://vanilla-extract.style/',
  githubUrl: 'https://github.com/seek-oss/vanilla-extract',
  imgSrc: requireImg('vanilla-extract-style.png'),
  keyWords: ['vanilla-extract', 'css'],
  label: 'VanillaExtract',
}, {
  url: 'https://windicss.org/',
  githubUrl: 'https://github.com/windicss/windicss',
  imgSrc: requireImg('windicss.png'),
  keyWords: ['windicss', 'css'],
  label: 'Windi CSS',
}, {
  url: 'https://linaria.dev/',
  githubUrl: 'https://github.com/callstack/linaria',
  imgSrc: requireImg('linaria.png'),
  keyWords: ['linaria', 'css'],
  label: 'Linaria',
}, {
  url: 'https://theme-ui.com/',
  githubUrl: 'https://github.com/system-ui/theme-ui',
  imgSrc: requireImg('theme-ui.png'),
  keyWords: ['theme-ui', 'css'],
  label: 'Theme UI',
  darkInvert: true,
}, {
  url: 'https://fela.js.org/',
  githubUrl: 'https://github.com/robinweser/fela',
  imgSrc: requireImg('fela.png'),
  keyWords: ['fela', 'css'],
  label: 'Fela',
}, {
  url: 'https://styled-system.com/',
  githubUrl: 'https://github.com/styled-system/styled-system',
  imgSrc: requireImg('styled-system.png'),
  keyWords: ['styled-system', 'css'],
  label: 'StyledSystem',
  darkInvert: true,
}, {
  url: 'https://stitches.dev/',
  githubUrl: 'https://github.com/modulz/stitches',
  imgSrc: requireImg('stitches.png'),
  keyWords: ['stitches', 'css'],
  label: 'Stitches',
  darkInvert: true,
}]

export default apps
