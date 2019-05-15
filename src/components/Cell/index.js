import React from 'react'
import './index.css'

const Cell = ({ url, imgSrc, label }) => (
  <li className="cell">
    <a href={url} title={label}>
      <div className="img-box">
        <img src={imgSrc} alt={label}/>
      </div>
      <p className="title">{label}</p>
      <i className="corner"></i>
    </a>
  </li>
)

export default Cell
