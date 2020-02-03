import React from 'react'
import './index.css'

const gitHubIcon = require('../../assets/images/github.png')

function onCornerClick(e: React.SyntheticEvent, githubUrl: string) {
  e.preventDefault()
  window.open(githubUrl)
  return false
}

const Cell = ({
  url,
  imgSrc,
  githubUrl,
  label,
}: {
  [propName: string]: string
}) => (
  <li className="cell">
    <a className="app" href={url} title={label}>
      <div className="img-box">
        <img src={imgSrc} alt={label} />
      </div>
      <p className="title">{label}</p>
      {githubUrl && (
        <div
          onKeyDown={() => {}}
          onClick={e => onCornerClick(e, githubUrl)}
          className="corner"
        >
          <div className="corner-icon-wrap">
            <img
              className="corner-icon"
              draggable={false}
              src={gitHubIcon}
              alt=""
            />
          </div>
        </div>
      )}
    </a>
  </li>
)

export default Cell
