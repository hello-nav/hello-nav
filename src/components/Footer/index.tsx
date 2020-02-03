import React from 'react'
import './index.css'

const Footer = () => (
  <div className="footer__wrap">
    <p>
      <a href="https://github.com/hello-nav/hello-nav" className="logo vertical-center"> </a>
      <span className="vertical-center">
        Made by
        <b>
          {' '}
          <a className="bener-link" href="https://github.com/Heroor">Bener</a>
          {' '}
        </b>
        with
        <span className="heart"> ❤ </span>
      </span>
    </p>
    <p>&copy;2018-2019</p>

  </div>
)

export default Footer
