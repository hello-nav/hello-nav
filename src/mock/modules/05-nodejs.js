import {
  requireImg
} from '../utils'

export default [{
  url: 'http://nodejs.cn/api/',
  imgSrc: requireImg('nodejs.png'),
  keyWords: ['nodejs'],
  label: 'NodeJS'
}, {
  url: 'http://expressjs.com/',
  imgSrc: requireImg('express.png'),
  keyWords: ['express'],
  label: 'Express'
}, {
  url: 'https://eggjs.org/',
  imgSrc: requireImg('egg.png'),
  keyWords: ['egg'],
  label: 'Egg'
}]