import {
  requireImg
} from '../utils'

export default [{
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
  url: 'https://tinypng.com/',
  imgSrc: requireImg('tinypng.png'),
  keyWords: ['tinypng'],
  label: 'Tinypng'
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