import React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { AppsProvider } from '../hooks/index'
import App from '../components/App'
import logo from '../images/icon.png'
import '../styles/index.less'

const root: React.FC<PageProps> = () => {
  return (
    <>
      <h1>Hello Nav</h1>
      <a className="skip-link" href="#___gatsby">
        Skip to main
      </a>
      <AppsProvider>
        <App />
      </AppsProvider>
      <noscript>You need to enable JavaScript to run this app.</noscript>
    </>
  )
}

export const Head: HeadFC = () => {
  return (
    <>
      <meta name="msapplication-TileColor" content="#FFFFFF"></meta>
      <meta name="msapplication-TileImage" content={logo}></meta>
      <meta name="theme-color" content="#f6f7f9"></meta>
      <meta name="keywords" content="前端导航,hello-nav,Hello Nav,navigation for developers"></meta>
      <meta name="description" content="A pure navigation for developers"></meta>
      <title>Hello Nav!</title>
      <style>
        {`
          h1 {
            color: transparent;
          }
          .skip-link {
            position: absolute;
            top: -100px;
            left: 0;
            background: #000000;
            color: white;
            padding: 8px;
            z-index: 100;
            font-family: 'bi';
          }
          .skip-link:focus {
            top: 0;
          }
        `}
      </style>
    </>
  )
}

export default root
