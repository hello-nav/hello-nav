import { requireImg } from '../utils'

export default {
  title: 'css',
  children: [{
    url: 'https://www.sass.hk/',
    imgSrc: requireImg('sass.png'),
    keyWords: ['sass'],
    label: 'Sass'
  }, {
    url: 'http://lesscss.cn/',
    imgSrc: requireImg('less.png'),
    keyWords: ['less'],
    label: 'Less'
  }, {
    url: 'https://postcss.org/',
    imgSrc: requireImg('postcss.png'),
    keyWords: ['postcss'],
    label: 'Postcss'
  }]
}