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
  url: 'https://koajs.com/',
  imgSrc: requireImg('koa.png'),
  keyWords: ['koa'],
  label: 'Koa'
}, {
  url: 'https://eggjs.org/',
  imgSrc: requireImg('egg.png'),
  keyWords: ['egg'],
  label: 'Egg'
}, {
  url: 'https://hapijs.com/',
  imgSrc: requireImg('hapi.png'),
  keyWords: ['hapi'],
  label: 'Hapi'
}, {
  url: 'http://docs.sequelizejs.com/',
  imgSrc: requireImg('sequelize.png'),
  keyWords: ['sequelize'],
  label: 'Sequelize'
}]
