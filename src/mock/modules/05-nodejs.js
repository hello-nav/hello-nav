import {
  requireImg
} from '../utils'

export default [{
  url: 'http://nodejs.cn/api/',
  imgSrc: requireImg('nodejs.png'),
  keyWords: ['nodejs', 'node'],
  label: 'NodeJS'
}, {
  url: 'http://expressjs.com/',
  imgSrc: requireImg('express.png'),
  keyWords: ['express', 'node'],
  label: 'Express'
}, {
  url: 'https://koajs.com/',
  imgSrc: requireImg('koa.png'),
  keyWords: ['koa', 'node'],
  label: 'Koa'
}, {
  url: 'https://eggjs.org/',
  imgSrc: requireImg('egg.png'),
  keyWords: ['egg', 'node'],
  label: 'Egg'
}, {
  url: 'https://hapijs.com/',
  imgSrc: requireImg('hapi.png'),
  keyWords: ['hapi', 'node'],
  label: 'Hapi'
}]
