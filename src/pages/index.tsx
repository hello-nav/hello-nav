import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { AppsProvider } from '../hooks/index'
import App from '../components/App'
import '../styles/index.less'

const root: React.FC<PageProps> = () => {
  return (
    <AppsProvider>
      <App />
    </AppsProvider>
  )
}

export const Head: HeadFC = () => <title>Hello Nav!</title>

export default root
