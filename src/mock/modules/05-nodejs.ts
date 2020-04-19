import {
  requireImg,
} from '../utils'

const apps: AppItem[] = [{
  url: 'https://nodejs.org',
  githubUrl: 'https://github.com/nodejs/node/',
  imgSrc: requireImg('nodejs.png'),
  keyWords: ['nodejs'],
  label: 'NodeJS',
}, {
  url: 'http://expressjs.com/',
  githubUrl: 'https://github.com/expressjs/expressjs.com',
  imgSrc: requireImg('express.png'),
  keyWords: ['express'],
  label: 'Express',
}, {
  url: 'https://koajs.com/',
  githubUrl: 'https://github.com/koajs/koa',
  imgSrc: requireImg('koa.png'),
  keyWords: ['koa'],
  label: 'Koa',
}, {
  url: 'https://eggjs.org/',
  githubUrl: 'https://github.com/eggjs/egg/',
  imgSrc: requireImg('egg.png'),
  keyWords: ['egg'],
  label: 'Egg',
}, {
  url: 'https://hapijs.com/',
  githubUrl: 'https://github.com/hapijs/hapi',
  imgSrc: requireImg('hapi.png'),
  keyWords: ['hapi'],
  label: 'Hapi',
}, {
  url: 'https://nestjs.com/',
  githubUrl: 'https://github.com/nestjs/nest/',
  imgSrc: requireImg('nest.png'),
  keyWords: ['nest'],
  label: 'Nest',
}, {
  url: 'https://www.fastify.io/',
  githubUrl: 'https://github.com/fastify/fastify',
  imgSrc: requireImg('fastify.png'),
  keyWords: ['fastify'],
  label: 'Fastify',
}, {
  url: 'https://adonisjs.com/',
  githubUrl: 'https://github.com/adonisjs/adonis-framework',
  imgSrc: requireImg('adonis.png'),
  keyWords: ['adonis'],
  label: 'Adonis',
}]

export default apps
