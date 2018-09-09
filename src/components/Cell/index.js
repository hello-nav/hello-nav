import React from 'react'
import './index.css'

const Cell = ({ url, imgSrc, title }) => (
  <li className="cell">
    <a href={url} title={title}>
      <div className="img-box">
        <img src={imgSrc} alt={title}/>
      </div>
      <p className="title">{title}</p>
    </a>
  </li>
)

export default Cell