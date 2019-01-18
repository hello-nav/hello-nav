import {
  requireImg
} from '../utils'

export default [{
  url: 'https://pugjs.org/',
  imgSrc: requireImg('pug.png'),
  keyWords: ['pug'],
  label: 'Pug'
}, {
  url: 'http://sass-lang.com/',
  imgSrc: requireImg('sass.png'),
  keyWords: ['sass'],
  label: 'Sass'
}, {
  url: 'http://lesscss.org/',
  imgSrc: requireImg('less.png'),
  keyWords: ['less'],
  label: 'Less'
}, {
  url: 'http://stylus-lang.com/',
  imgSrc: requireImg('stylus.png'),
  keyWords: ['stylus'],
  label: 'Stylus'
}, {
  url: 'https://postcss.org/',
  imgSrc: requireImg('postcss.png'),
  keyWords: ['postcss'],
  label: 'Postcss'
}]