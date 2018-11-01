import { requireImg } from '../utils'

export default {
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
}