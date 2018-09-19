const _require = path => require('../assets/images/' + path)

export default [{
  title: 'framework',
  children: [{
    url: 'https://cn.vuejs.org/',
    imgSrc: _require('vue.png'),
    keyWords: ['vue'],
    label: 'Vue.js'
  }, {
    url: 'https://doc.react-china.org/',
    imgSrc: _require('react.png'),
    keyWords: ['react'],
    label: 'React.js'
  }, {
    url: 'https://angular.cn/',
    imgSrc: _require('angular.png'),
    keyWords: ['angular'],
    label: 'Angular.js'
  }, {
    url: 'https://mp.weixin.qq.com/debug/wxadoc/dev/framework/MINA.html',
    imgSrc: _require('xcx.png'),
    keyWords: ['微信小程序', 'weixin', 'xiaochengxu'],
    label: '微信小程序'
  }, {
    url: 'https://electronjs.org/',
    imgSrc: _require('electron.png'),
    keyWords: ['electron'],
    label: 'electron'
  }]
}, {
  title: 'tools',
  children: [{
    url: 'https://www.baidu.com/',
    imgSrc: _require('baidu.png'),
    keyWords: ['百度', 'baidu'],
    label: '百度'
  }, {
    url: 'https://webpack.js.org/',
    imgSrc: _require('webpack.png'),
    keyWords: ['webpack'],
    label: 'webpack'
  }, {
    url: 'https://www.gulpjs.com.cn/',
    imgSrc: _require('gulp.png'),
    keyWords: ['gulp'],
    label: 'gulp'
  }, {
    url: 'http://babeljs.io/',
    imgSrc: _require('babel.png'),
    keyWords: ['babel'],
    label: 'babel'
  }, {
    url: 'http://eslint.cn/',
    imgSrc: _require('eslint.png'),
    keyWords: ['eslint'],
    label: 'eslint'
  }, {
    url: 'https://www.tslang.cn/',
    imgSrc: _require('typescript.png'),
    keyWords: ['typescript'],
    label: 'TypeScript'
  }, {
    url: 'http://jquery.cuishifeng.cn/',
    imgSrc: _require('jquery.png'),
    keyWords: ['jquery'],
    label: 'jQuery'
  }]
}, {
  title: 'css',
  children: [{
    url: 'https://www.sass.hk/',
    imgSrc: _require('sass.png'),
    keyWords: ['sass'],
    label: 'sass'
  }, {
    url: 'http://lesscss.cn/',
    imgSrc: _require('less.png'),
    keyWords: ['less'],
    label: 'less'
  }, {
    url: 'https://postcss.org/',
    imgSrc: _require('postcss.png'),
    keyWords: ['postcss'],
    label: 'postcss'
  }]
}, {
  title: 'nodejs',
  children: [{
    url: 'http://nodejs.cn/api/',
    imgSrc: _require('nodejs.png'),
    keyWords: ['nodejs'],
    label: 'nodeJS'
  }, {
    url: 'http://expressjs.com/',
    imgSrc: _require('express.png'),
    keyWords: ['express'],
    label: 'express'
  }]
}, {
  title: 'other',
  children: [{
    url: 'https://studygolang.com/',
    imgSrc: _require('golang.png'),
    keyWords: ['golang'],
    label: 'golang'
  }, {
    url: 'https://ruby-china.org/',
    imgSrc: _require('ruby.png'),
    keyWords: ['ruby'],
    label: 'ruby'
  }]
}, {
  title: 'website',
  children: [{
    url: 'https://github.com/',
    imgSrc: _require('github.png'),
    keyWords: ['github'],
    label: 'GitHub'
  }, {
    url: 'https://developer.mozilla.org/zh-CN/',
    imgSrc: _require('MDN.png'),
    keyWords: ['mdn'],
    label: 'MDN'
  }, {
    url: 'https://juejin.im/timeline',
    imgSrc: _require('juejin.png'),
    keyWords: ['掘金', 'juejin'],
    label: '掘金'
  }, {
    url: 'https://segmentfault.com/',
    imgSrc: _require('sf.png'),
    keyWords: ['segmentfault', 'sf'],
    label: 'segmentfault'
  }, {
    url: 'hhttp://www.iconfont.cn/',
    imgSrc: _require('iconfont.png'),
    keyWords: ['iconfont'],
    label: 'iconfont'
  }, {
    url: 'https://www.zhihu.com/',
    imgSrc: _require('zhihu.png'),
    keyWords: ['知乎', 'zhihu'],
    label: '知乎'
  }, {
    url: 'https://kb.cnblogs.com/',
    imgSrc: _require('bokeyuan.png'),
    keyWords: ['博客园', 'cnblogs', 'bokeyuan'],
    label: '博客园'
  }, {
    url: 'https://www.jianshu.com/',
    imgSrc: _require('jianshu.png'),
    keyWords: ['简书', 'jianshu'],
    label: '简书'
  }, {
    url: 'http://web.jobbole.com/',
    imgSrc: _require('jobbole.png'),
    keyWords: ['伯乐在线', 'bolezaixian', 'jobbole'],
    label: '伯乐在线'
  }]
}]
