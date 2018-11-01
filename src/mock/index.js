import { requireImg } from './utils'
// const data = require.context('./data', true, /\.js$/).resolve()
// console.log(data)

export default [{
  title: 'framework',
  children: [{
    url: 'https://cn.vuejs.org/',
    imgSrc: requireImg('vue.png'),
    keyWords: ['vue'],
    label: 'Vue'
  }, {
    url: 'https://doc.react-china.org/',
    imgSrc: requireImg('react.png'),
    keyWords: ['react'],
    label: 'React'
  }, {
    url: 'https://angular.cn/',
    imgSrc: requireImg('angular.png'),
    keyWords: ['angular'],
    label: 'Angular'
  }, {
    url: 'https://mp.weixin.qq.com/debug/wxadoc/dev/framework/MINA.html',
    imgSrc: requireImg('xcx.png'),
    keyWords: ['微信小程序', 'weixin', 'xiaochengxu'],
    label: '微信小程序'
  }, {
    url: 'https://electronjs.org/',
    imgSrc: requireImg('electron.png'),
    keyWords: ['electron'],
    label: 'Electron'
  }]
}, {
  title: 'ui-library',
  children: [{
    url: 'https://element.eleme.io/',
    imgSrc: requireImg('element-ui.png'),
    keyWords: ['饿了么', 'element', 'element-ui', 'ui'],
    label: 'Element'
  }, {
    url: 'https://www.iviewui.com/',
    imgSrc: requireImg('iview.png'),
    keyWords: ['iview', 'ui'],
    label: 'iView'
  }, {
    url: 'https://muse-ui.org/',
    imgSrc: requireImg('museui.png'),
    keyWords: ['muse-ui', 'ui'],
    label: 'Muse-ui'
  }, {
    url: 'https://at-ui.github.io/at-ui/',
    imgSrc: requireImg('at-ui.png'),
    keyWords: ['at-ui', 'ui'],
    label: 'At-ui'
  }, {
    url: 'https://youzan.github.io/vant',
    imgSrc: requireImg('vant.png'),
    keyWords: ['vant', 'ui'],
    label: 'Vant'
  }, {
    url: 'https://ant.design/',
    imgSrc: requireImg('ant-design.png'),
    keyWords: ['antd', 'ant-design', 'ui'],
    label: 'Ant-Design'
  }, {
    url: 'https://antv.alipay.com/',
    imgSrc: requireImg('antv.png'),
    keyWords: ['antv', 'ui'],
    label: 'AntV'
  }, {
    url: 'http://www.iconfont.cn/',
    imgSrc: requireImg('iconfont.png'),
    keyWords: ['iconfont'],
    label: 'IconFont'
  }]
}, {
  title: 'library',
  children: [{
    url: 'https://webpack.js.org/',
    imgSrc: requireImg('webpack.png'),
    keyWords: ['webpack'],
    label: 'Webpack'
  }, {
    url: 'https://www.gulpjs.com.cn/',
    imgSrc: requireImg('gulp.png'),
    keyWords: ['gulp'],
    label: 'Gulp'
  }, {
    url: 'http://babeljs.io/',
    imgSrc: requireImg('babel.png'),
    keyWords: ['babel'],
    label: 'Babel'
  }, {
    url: 'http://eslint.cn/',
    imgSrc: requireImg('eslint.png'),
    keyWords: ['eslint'],
    label: 'Eslint'
  }, {
    url: 'https://www.tslang.cn/',
    imgSrc: requireImg('typescript.png'),
    keyWords: ['typescript'],
    label: 'TypeScript'
  }, {
    url: 'http://jquery.cuishifeng.cn/',
    imgSrc: requireImg('jquery.png'),
    keyWords: ['jquery'],
    label: 'jQuery'
  }]
}, {
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
}, {
  title: 'nodejs',
  children: [{
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
}, {
  title: 'other',
  children: [{
    url: 'https://studygolang.com/',
    imgSrc: requireImg('golang.png'),
    keyWords: ['golang'],
    label: 'Golang'
  }, {
    url: 'https://ruby-china.org/',
    imgSrc: requireImg('ruby.png'),
    keyWords: ['ruby'],
    label: 'Ruby'
  }, {
    url: 'https://www.dartlang.org/',
    imgSrc: requireImg('dart.png'),
    keyWords: ['dart'],
    label: 'Dart'
  }]
}, {
  title: 'website',
  children: [{
    url: 'https://www.baidu.com/',
    imgSrc: requireImg('baidu.png'),
    keyWords: ['百度', 'baidu'],
    label: '百度'
  }, {
    url: 'https://www.google.com/',
    imgSrc: requireImg('google.png'),
    keyWords: ['谷歌', 'google'],
    label: 'Google'
  }, {
    url: 'https://github.com/',
    imgSrc: requireImg('github.png'),
    keyWords: ['github'],
    label: 'GitHub'
  }, {
    url: 'https://developer.mozilla.org/zh-CN/',
    imgSrc: requireImg('MDN.png'),
    keyWords: ['mdn'],
    label: 'MDN'
  }, {
    url: 'https://juejin.im/',
    imgSrc: requireImg('juejin.png'),
    keyWords: ['掘金', 'juejin'],
    label: '掘金'
  }, {
    url: 'https://segmentfault.com/',
    imgSrc: requireImg('sf.png'),
    keyWords: ['segmentfault', 'sf'],
    label: 'SegmentFault'
  }, {
    url: 'https://www.zhihu.com/',
    imgSrc: requireImg('zhihu.png'),
    keyWords: ['知乎', 'zhihu'],
    label: '知乎'
  }, {
    url: 'https://kb.cnblogs.com/',
    imgSrc: requireImg('bokeyuan.png'),
    keyWords: ['博客园', 'cnblogs', 'bokeyuan'],
    label: '博客园'
  }, {
    url: 'https://www.jianshu.com/',
    imgSrc: requireImg('jianshu.png'),
    keyWords: ['简书', 'jianshu'],
    label: '简书'
  }, {
    url: 'http://web.jobbole.com/',
    imgSrc: requireImg('jobbole.png'),
    keyWords: ['伯乐在线', 'bolezaixian', 'jobbole'],
    label: '伯乐在线'
  }]
}]
