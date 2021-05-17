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
}]

export default apps
