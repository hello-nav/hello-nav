import {
  requireImg,
} from '../utils'

const apps: AppItem[] = [{
  url: 'https://webpack.js.org/',
  githubUrl: 'https://github.com/webpack/webpack',
  imgSrc: requireImg('webpack.png'),
  keyWords: ['webpack'],
  label: 'Webpack',
}, {
  url: 'https://www.pika.dev/',
  githubUrl: 'https://github.com/pikapkg/web',
  imgSrc: requireImg('pika.png'),
  keyWords: ['pika'],
  label: 'Pika',
}, {
  url: 'https://rollupjs.org/',
  githubUrl: 'https://github.com/rollup/rollup',
  imgSrc: requireImg('rollup.png'),
  keyWords: ['rollup'],
  label: 'Rollup',
}, {
  url: 'https://prepack.io/',
  githubUrl: 'https://github.com/facebook/prepack',
  imgSrc: requireImg('prepack.png'),
  keyWords: ['prepack'],
  label: 'Prepack',
}, {
  url: 'https://parceljs.org/',
  githubUrl: 'https://github.com/parcel-bundler/parcel',
  imgSrc: requireImg('parcel.png'),
  keyWords: ['parcel'],
  label: 'Parcel',
}, {
  url: 'https://gulpjs.com/',
  githubUrl: 'https://github.com/gulpjs/gulp',
  imgSrc: requireImg('gulp.png'),
  keyWords: ['gulp'],
  label: 'Gulp',
}, {
  url: 'https://gruntjs.com/',
  githubUrl: 'https://github.com/gruntjs/grunt',
  imgSrc: requireImg('grunt.png'),
  keyWords: ['grunt'],
  label: 'Grunt',
}, {
  url: 'http://browserify.org/',
  githubUrl: 'https://github.com/browserify/browserify',
  imgSrc: requireImg('browserify.png'),
  keyWords: ['browserify'],
  label: 'Browserify',
}, {
  url: 'http://babeljs.io/',
  githubUrl: 'https://github.com/babel/babel',
  imgSrc: requireImg('babel.png'),
  keyWords: ['babel'],
  label: 'Babel',
}, {
  url: 'https://eslint.org/',
  githubUrl: 'https://github.com/eslint/eslint',
  imgSrc: requireImg('eslint.png'),
  keyWords: ['eslint'],
  label: 'ESlint',
}, {
  url: 'https://jshint.com/',
  githubUrl: 'https://github.com/jshint/jshint',
  imgSrc: requireImg('jshint.png'),
  keyWords: ['jshint'],
  label: 'JSHint',
}, {
  url: 'https://flow.org/',
  githubUrl: 'https://github.com/facebook/flow',
  imgSrc: requireImg('flow.png'),
  keyWords: ['flow'],
  label: 'Flow',
}, {
  url: 'https://prettier.io/',
  githubUrl: 'https://github.com/prettier/prettier',
  imgSrc: requireImg('prettier.png'),
  keyWords: ['prettier'],
  label: 'Prettier',
}, {
  url: 'https://www.typescriptlang.org/',
  githubUrl: 'https://github.com/Microsoft/TypeScript',
  imgSrc: requireImg('typescript.png'),
  keyWords: ['typescript'],
  label: 'TypeScript',
}, {
  url: 'https://coffeescript.org/',
  githubUrl: 'https://github.com/jashkenas/coffeescript',
  imgSrc: requireImg('coffeescript.png'),
  keyWords: ['coffeescript'],
  label: 'CoffeeScript',
  darkInvert: true,
}, {
  url: 'https://rxjs.dev/',
  githubUrl: 'https://github.com/ReactiveX/rxjs',
  imgSrc: requireImg('rxjs.png'),
  keyWords: ['rxjs'],
  label: 'RxJS',
}, {
  url: 'https://redux.js.org/',
  githubUrl: 'https://github.com/reduxjs/redux',
  imgSrc: requireImg('redux.png'),
  keyWords: ['redux'],
  label: 'Redux',
}, {
  url: 'https://reacttraining.com/react-router/',
  githubUrl: 'https://github.com/ReactTraining/react-router',
  imgSrc: requireImg('react-router.png'),
  keyWords: ['reactrouter'],
  label: 'React Router',
}, {
  url: 'https://graphql.org/',
  githubUrl: 'https://github.com/graphql/graphiql',
  imgSrc: requireImg('graphql.png'),
  keyWords: ['graphql'],
  label: 'GraphQL',
}, {
  url: 'https://www.apollographql.com/',
  githubUrl: 'https://github.com/apollographql',
  imgSrc: requireImg('apollographql.png'),
  keyWords: ['apollographql'],
  label: 'ApolloGraphQL',
}, {
  url: 'https://lerna.js.org/',
  githubUrl: 'https://github.com/lerna/lerna',
  imgSrc: requireImg('lerna.png'),
  keyWords: ['lerna'],
  label: 'Lerna',
  darkInvert: true,
}, {
  url: 'https://lodash.com/',
  githubUrl: 'https://github.com/lodash/lodash/',
  imgSrc: requireImg('lodash.png'),
  keyWords: ['lodash'],
  label: 'Lodash',
}, {
  url: 'https://ahooks.js.org/',
  githubUrl: 'https://github.com/alibaba/hooks',
  imgSrc: requireImg('ahooks.png'),
  keyWords: ['ahooks'],
  label: 'ahooks',
}, {
  url: 'https://dojotoolkit.org/',
  githubUrl: 'https://github.com/dojo/dojo',
  imgSrc: requireImg('dojo.png'),
  keyWords: ['dojo'],
  label: 'Dojo',
}, {
  url: 'https://immutable-js.github.io/immutable-js/',
  githubUrl: 'https://github.com/immutable-js/immutable-js',
  imgSrc: requireImg('immutable.png'),
  keyWords: ['immutable'],
  label: 'Immutable',
}, {
  url: 'https://jquery.com/',
  githubUrl: 'https://github.com/jquery/jquery',
  imgSrc: requireImg('jquery.png'),
  keyWords: ['jquery'],
  label: 'jQuery',
}, {
  url: 'https://zeptojs.com/',
  githubUrl: 'https://github.com/madrobby/zepto/',
  imgSrc: requireImg('zepto.png'),
  keyWords: ['zepto'],
  label: 'Zepto',
}, {
  url: 'https://github.com/axios/axios',
  githubUrl: 'https://github.com/axios/axios',
  imgSrc: requireImg('axios.png'),
  keyWords: ['axios'],
  label: 'Axios',
  darkInvert: true,
}, {
  url: 'http://mockjs.com/',
  githubUrl: 'https://github.com/nuysoft/Mock',
  imgSrc: requireImg('mockjs.png'),
  keyWords: ['mockjs'],
  label: 'Mock.js',
}, {
  url: 'https://momentjs.com/',
  githubUrl: 'https://github.com/moment/moment',
  imgSrc: requireImg('moment.png'),
  keyWords: ['moment'],
  label: 'Moment',
}, {
  url: 'https://day.js.org/',
  githubUrl: 'https://github.com/iamkun/dayjs',
  imgSrc: requireImg('dayjs.png'),
  keyWords: ['dayjs'],
  label: 'Day.js',
}, {
  url: 'https://mochajs.org/',
  githubUrl: 'https://github.com/mochajs/mocha',
  imgSrc: requireImg('mocha.png'),
  keyWords: ['mocha'],
  label: 'Mocha',
}, {
  url: 'https://jestjs.io/',
  githubUrl: 'https://github.com/facebook/jest',
  imgSrc: requireImg('jest.png'),
  keyWords: ['jest'],
  label: 'Jest',
}, {
  url: 'https://www.cypress.io/',
  githubUrl: 'https://github.com/cypress-io/cypress',
  imgSrc: requireImg('cypress.png'),
  keyWords: ['cypress'],
  label: 'Cypress',
}, {
  url: 'https://ava.li/',
  githubUrl: 'https://github.com/avajs/ava',
  imgSrc: requireImg('ava.png'),
  keyWords: ['ava'],
  label: 'AVA',
}, {
  url: 'https://miragejs.com/',
  githubUrl: 'https://github.com/miragejs',
  imgSrc: requireImg('mirage.png'),
  keyWords: ['mirage'],
  label: 'Mirage',
}, {
  url: 'https://markdown-it.github.io/',
  githubUrl: 'https://github.com/markdown-it/markdown-it',
  imgSrc: requireImg('markdown.png'),
  keyWords: ['markdownit'],
  label: 'Markdown it',
  darkInvert: true,
}, {
  url: 'https://highlightjs.org/',
  githubUrl: 'https://github.com/highlightjs/highlight.js',
  imgSrc: requireImg('hljs.png'),
  keyWords: ['highlightjs', 'highlight.js', 'hljs'],
  label: 'Highlight JS',
}, {
  url: 'https://threejs.org/',
  githubUrl: 'https://github.com/mrdoob/three.js/',
  imgSrc: requireImg('three.js.png'),
  keyWords: ['threejs', 'three.js'],
  label: 'Three JS',
  darkInvert: true,
}, {
  url: 'https://pptr.dev/',
  githubUrl: 'https://github.com/GoogleChrome/puppeteer',
  imgSrc: requireImg('puppeteer.png'),
  keyWords: ['pptr', 'puppeteer'],
  label: 'Puppeteer',
}, {
  url: 'https://yeoman.io/',
  githubUrl: 'https://github.com/yeoman/yo',
  imgSrc: requireImg('yeoman.png'),
  keyWords: ['yo', 'yeoman'],
  label: 'Yeoman',
}, {
  url: 'http://docs.sequelizejs.com/',
  githubUrl: 'https://github.com/sequelize/sequelize',
  imgSrc: requireImg('sequelize.png'),
  keyWords: ['sequelize'],
  label: 'Sequelize',
}]

export default apps