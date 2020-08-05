import {
  requireImg,
} from '../utils'

const apps: AppItem[] = [{
  url: 'https://deno.land/',
  githubUrl: 'https://github.com/denoland',
  imgSrc: requireImg('deno.png'),
  keyWords: ['deno'],
  label: 'Deno',
  darkInvert: true,
}, {
  url: 'https://golang.org/',
  githubUrl: 'https://github.com/golang/go/',
  imgSrc: requireImg('golang.png'),
  keyWords: ['golang'],
  label: 'Golang',
}, {
  url: 'https://www.ruby-lang.org/',
  githubUrl: 'https://github.com/ruby/ruby/',
  imgSrc: requireImg('ruby.png'),
  keyWords: ['ruby'],
  label: 'Ruby',
}, {
  url: 'https://www.dartlang.org/',
  githubUrl: 'https://github.com/dart-lang/',
  imgSrc: requireImg('dart.png'),
  keyWords: ['dart'],
  label: 'Dart',
}, {
  url: 'https://www.python.org/',
  githubUrl: 'https://github.com/python',
  imgSrc: requireImg('python.png'),
  keyWords: ['python'],
  label: 'Python',
}, {
  url: 'https://www.docker.com/',
  githubUrl: 'https://github.com/docker',
  imgSrc: requireImg('docker.png'),
  keyWords: ['docker'],
  label: 'Docker',
}, {
  url: 'http://nginx.org/',
  githubUrl: 'https://github.com/nginx',
  imgSrc: requireImg('nginx.png'),
  keyWords: ['nginx'],
  label: 'Nginx',
}, {
  url: 'https://redis.io/',
  githubUrl: 'https://github.com/redis',
  imgSrc: requireImg('redis.png'),
  keyWords: ['redis'],
  label: 'Redis',
}, {
  url: 'https://www.mysql.com/',
  githubUrl: 'https://github.com/mysql',
  imgSrc: requireImg('mysql.png'),
  keyWords: ['mysql'],
  label: 'mysql',
}, {
  url: 'https://www.mongodb.com/',
  githubUrl: 'https://github.com/mongodb',
  imgSrc: requireImg('mongodb.png'),
  keyWords: ['mongodb'],
  label: 'mongodb',
}]

export default apps
