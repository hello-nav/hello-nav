import React from 'react'
import ReactDOM from 'react-dom'
import initIconfont from '../src/assets/fonts/iconfont'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
initIconfont()
ReactDOM.render(<App />, document.getElementById('app'))
registerServiceWorker()
