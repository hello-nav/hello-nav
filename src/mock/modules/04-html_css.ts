import {
  requireImg,
} from '../utils'

const apps: AppItem[] = [{
  url: 'https://pugjs.org/',
  githubUrl: 'https://github.com/pugjs/pug',
  imgSrc: requireImg('pug.png'),
  keyWords: ['pug'],
  label: 'Pug',
}, {
  url: 'http://sass-lang.com/',
  githubUrl: 'https://github.com/sass/sass',
  imgSrc: requireImg('sass.png'),
  keyWords: ['sass'],
  label: 'Sass',
}, {
  url: 'http://lesscss.org/',
  imgSrc: requireImg('less.png'),
  githubUrl: 'https://github.com/less/less-docs',
  keyWords: ['less'],
  label: 'Less',
}, {
  url: 'http://stylus-lang.com/',
  imgSrc: requireImg('stylus.png'),
  githubUrl: 'https://github.com/stylus/stylus/',
  keyWords: ['stylus'],
  label: 'Stylus',
  darkInvert: true,
}, {
  url: 'https://postcss.org/',
  imgSrc: requireImg('postcss.png'),
  githubUrl: 'https://github.com/postcss/postcss',
  keyWords: ['postcss'],
  label: 'Postcss',
}]

export default apps
