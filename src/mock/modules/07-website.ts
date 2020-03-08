import {
  requireImg,
} from '../utils'

const apps: AppItem[] = [{
  url: 'https://www.baidu.com/',
  imgSrc: requireImg('baidu.png'),
  keyWords: ['百度', 'baidu'],
  label: '百度',
}, {
  url: 'https://www.google.com/',
  githubUrl: 'https://github.com/google',
  imgSrc: requireImg('google.png'),
  keyWords: ['谷歌', 'google'],
  label: 'Google',
}, {
  url: 'https://www.facebook.com/',
  githubUrl: 'https://github.com/facebook',
  imgSrc: requireImg('facebook.png'),
  keyWords: ['facebook'],
  label: 'Facebook',
}, {
  url: 'https://github.com/',
  imgSrc: requireImg('github.png'),
  keyWords: ['github'],
  label: 'GitHub',
}, {
  url: 'https://gitlab.com/',
  imgSrc: requireImg('gitlab.png'),
  keyWords: ['gitlab'],
  label: 'GitLab',
}, {
  url: 'https://git-scm.com/',
  githubUrl: 'https://github.com/git/git',
  imgSrc: requireImg('git.png'),
  keyWords: ['git'],
  label: 'Git',
}, {
  url: 'https://www.npmjs.com/',
  githubUrl: 'https://github.com/npm',
  imgSrc: requireImg('npm.png'),
  keyWords: ['npm'],
  label: 'NPM',
}, {
  url: 'https://yarnpkg.com/',
  githubUrl: 'https://github.com/yarnpkg/yarn',
  imgSrc: requireImg('yarn.png'),
  keyWords: ['yarn'],
  label: 'Yarn',
}, {
  url: 'https://developer.mozilla.org/',
  githubUrl: 'https://github.com/mdn',
  imgSrc: requireImg('mdn.png'),
  keyWords: ['mdn'],
  label: 'MDN',
}, {
  url: 'https://stackoverflow.com/',
  imgSrc: requireImg('stackoverflow.png'),
  keyWords: ['stackoverflow'],
  label: 'stackoverflow',
}, {
  url: 'https://travis-ci.org/',
  githubUrl: 'https://github.com/travis-ci',
  imgSrc: requireImg('travis.png'),
  keyWords: ['travis', 'ci'],
  label: 'Travis',
}, {
  url: 'https://codesandbox.io/',
  githubUrl: 'https://github.com/codesandbox/codesandbox-client',
  imgSrc: requireImg('codesandbox.png'),
  keyWords: ['codesandbox'],
  label: 'CodeSandbox',
}, {
  url: 'https://tinypng.com/',
  imgSrc: requireImg('tinypng.png'),
  keyWords: ['tinypng'],
  label: 'Tinypng',
}, {
  url: 'https://juejin.im/',
  githubUrl: 'https://github.com/xitu',
  imgSrc: requireImg('juejin.png'),
  keyWords: ['掘金', 'juejin'],
  label: '掘金',
}, {
  url: 'https://segmentfault.com/',
  imgSrc: requireImg('sf.png'),
  keyWords: ['segmentfault', 'sf'],
  label: 'SegmentFault',
}, {
  url: 'https://www.zhihu.com/',
  imgSrc: requireImg('zhihu.png'),
  keyWords: ['知乎', 'zhihu'],
  label: '知乎',
}, {
  url: 'https://kb.cnblogs.com/',
  imgSrc: requireImg('bokeyuan.png'),
  keyWords: ['博客园', 'cnblogs', 'bokeyuan'],
  label: '博客园',
}, {
  url: 'https://www.jianshu.com/',
  imgSrc: requireImg('jianshu.png'),
  keyWords: ['简书', 'jianshu'],
  label: '简书',
}, {
  url: 'http://web.jobbole.com/',
  imgSrc: requireImg('jobbole.png'),
  keyWords: ['伯乐在线', 'jobbole', 'bolezaixian'],
  label: '伯乐在线',
}]

export default apps
