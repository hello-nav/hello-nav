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
  url: 'https://nestjs.com/',
  githubUrl: 'https://github.com/nestjs/nest/',
  imgSrc: requireImg('nest.png'),
  keyWords: ['nest'],
  label: 'Nest'
}, {
  url: 'https://adonisjs.com/',
  githubUrl: 'https://github.com/adonisjs/adonis-framework',
  imgSrc: requireImg('adonis.png'),
  keyWords: ['adonis'],
  label: 'Adonis'
}, {
  url: 'http://docs.sequelizejs.com/',
  imgSrc: requireImg('sequelize.png'),
  keyWords: ['sequelize'],
  label: 'Sequelize'
}]
