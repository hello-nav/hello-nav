import {
  requireImg,
} from '../utils'

const apps: AppItem[] = [{
  url: 'https://cn.vuejs.org/',
  githubUrl: 'https://github.com/vuejs/vue',
  imgSrc: requireImg('vue.png'),
  keyWords: ['vue'],
  label: 'Vue',
}, {
  url: 'https://zh-hans.reactjs.org/',
  githubUrl: 'https://github.com/facebook/react/',
  imgSrc: requireImg('react.png'),
  keyWords: ['react'],
  label: 'React',
}, {
  url: 'https://reasonml.github.io/',
  githubUrl: 'https://github.com/facebook/reason',
  imgSrc: requireImg('reason.png'),
  keyWords: ['reason'],
  label: 'Reason',
}, {
  url: 'https://preactjs.com/',
  githubUrl: 'https://github.com/preactjs/preact',
  imgSrc: requireImg('preactjs.png'),
  keyWords: ['preactjs', 'react'],
  label: 'Preactjs',
}, {
  url: 'https://infernojs.org/',
  githubUrl: 'https://github.com/infernojs/inferno',
  imgSrc: requireImg('infernojs.png'),
  keyWords: ['infernojs', 'react'],
  label: 'Inferno',
}, {
  url: 'https://nerv.aotu.io/',
  githubUrl: 'https://github.com/NervJS/nerv',
  imgSrc: requireImg('nervjs.png'),
  keyWords: ['nervjs', 'react'],
  label: 'NervJS',
}, {
  url: 'https://umijs.org/',
  githubUrl: 'https://github.com/umijs/umi',
  imgSrc: requireImg('umi.png'),
  keyWords: ['umi', 'react'],
  label: 'Umi',
}, {
  url: 'https://dvajs.com/',
  githubUrl: 'https://github.com/dvajs/dva',
  imgSrc: requireImg('dvajs.png'),
  keyWords: ['dvajs', 'react'],
  label: 'DvaJS',
}, {
  url: 'https://angular.io/',
  githubUrl: 'https://github.com/angular/angular',
  imgSrc: requireImg('angular.png'),
  keyWords: ['angular'],
  label: 'Angular',
}, {
  url: 'https://emberjs.com/',
  githubUrl: 'https://github.com/emberjs/ember.js/',
  imgSrc: requireImg('ember.png'),
  keyWords: ['ember'],
  label: 'Ember',
}, {
  url: 'https://www.gatsbyjs.org/',
  githubUrl: 'https://github.com/gatsbyjs/gatsby',
  imgSrc: requireImg('gatsby.png'),
  keyWords: ['gatsby'],
  label: 'Gatsby',
}, {
  url: 'https://markojs.com/',
  githubUrl: 'https://github.com/marko-js/marko/',
  imgSrc: requireImg('marko.png'),
  keyWords: ['marko'],
  label: 'Marko',
}, {
  url: 'https://cml.js.org/',
  githubUrl: 'https://github.com/didi/chameleon',
  imgSrc: requireImg('chameleon.png'),
  keyWords: ['chameleon'],
  label: 'Chameleon',
}, {
  url: 'https://svelte.dev/',
  githubUrl: 'https://github.com/sveltejs/svelte',
  imgSrc: requireImg('svelte.png'),
  keyWords: ['svelte'],
  label: 'Svelte',
}, {
  url: 'https://sapper.svelte.dev/',
  githubUrl: 'https://github.com/sveltejs/sapper',
  imgSrc: requireImg('sapper.png'),
  keyWords: ['sapper'],
  label: 'Sapper',
}, {
  url: 'https://nuxtjs.org/',
  githubUrl: 'https://github.com/nuxt/nuxt.js',
  imgSrc: requireImg('nuxt.png'),
  keyWords: ['nuxt', 'vue'],
  label: 'Nuxt',
}, {
  url: 'https://nextjs.org/',
  githubUrl: 'https://github.com/zeit/next.js',
  imgSrc: requireImg('next.png'),
  keyWords: ['next', 'react'],
  label: 'Next',
}, {
  url: 'https://electronjs.org/',
  githubUrl: 'https://github.com/electron/electron',
  imgSrc: requireImg('electron.png'),
  keyWords: ['electron'],
  label: 'Electron',
}, {
  url: 'https://weex.apache.org/',
  githubUrl: 'https://github.com/apache/incubator-weex',
  imgSrc: requireImg('weex.png'),
  keyWords: ['weex', 'vue'],
  label: 'Weex',
}, {
  url: 'https://facebook.github.io/react-native/',
  githubUrl: 'https://github.com/facebook/react-native',
  imgSrc: requireImg('react-native.png'),
  keyWords: ['reactnative', 'react', 'rn'],
  label: 'React Native',
}, {
  url: 'https://www.nativescript.org/',
  githubUrl: 'https://github.com/NativeScript/NativeScript',
  imgSrc: requireImg('nativescript.png'),
  keyWords: ['nativescript'],
  label: 'NativeScript',
}, {
  url: 'https://taro.aotu.io/',
  githubUrl: 'https://github.com/NervJS/taro',
  imgSrc: requireImg('taro.png'),
  keyWords: ['taro'],
  label: 'Taro',
}, {
  url: 'https://flutter.io/',
  githubUrl: 'https://github.com/flutter/flutter',
  imgSrc: requireImg('flutter.png'),
  keyWords: ['flutter'],
  label: 'Flutter',
}, {
  url: 'https://gridsome.org/',
  githubUrl: 'https://github.com/gridsome/gridsome',
  imgSrc: requireImg('gridsome.png'),
  keyWords: ['gridsome', 'vue'],
  label: 'Gridsome',
}, {
  url: 'https://react-static.js.org',
  githubUrl: 'hhttps://github.com/react-static/react-static',
  imgSrc: requireImg('react-static.png'),
  keyWords: ['react-static', 'react'],
  label: 'react-static',
}, {
  url: 'https://gohugo.io/',
  githubUrl: 'https://github.com/gohugoio/hugo',
  imgSrc: requireImg('hugo.png'),
  keyWords: ['hugo'],
  label: 'Hugo',
}, {
  url: 'https://jekyllrb.com/',
  githubUrl: 'https://github.com/jekyll/jekyll',
  imgSrc: requireImg('jekyll.png'),
  keyWords: ['jekyll'],
  label: 'Jekyll',
}, {
  url: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
  imgSrc: requireImg('wxxcx.png'),
  keyWords: ['微信小程序', 'weixin', 'wechat'],
  label: '微信小程序',
}, {
  url: 'https://mini.open.alipay.com/channel/miniIndex.htm',
  imgSrc: requireImg('zfbxcx.png'),
  keyWords: ['支付宝小程序', 'zhifubao', 'alipay'],
  label: '支付宝小程序',
}, {
  url: 'https://mp.jd.com/',
  imgSrc: requireImg('jdmp.png'),
  keyWords: ['京东小程序', 'jingdong', 'jdmp'],
  label: '京东小程序',
}, {
  url: 'https://smartprogram.baidu.com/developer/index.html',
  imgSrc: requireImg('bdxcx.png'),
  keyWords: ['百度智能小程序', 'baidu'],
  label: '智能小程序',
}, {
  url: 'https://microapp.bytedance.com/',
  imgSrc: requireImg('dbmp.png'),
  keyWords: ['字节跳动小程序', 'bytedance'],
  label: '字节跳动小程序',
}, {
  url: 'https://www.quickapp.cn/quickAppShow',
  imgSrc: requireImg('kyy.png'),
  keyWords: ['快应用', 'kuaiyingyong'],
  label: '快应用',
}]

export default apps
