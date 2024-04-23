import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { AppsProvider } from './hooks/index'
import './style/index.less'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppsProvider>
      <App />
    </AppsProvider>
  </React.StrictMode>,
)
