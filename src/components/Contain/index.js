import React from 'react'
import Cell from '../Cell'
import './index.css'

const isShow = (keyWords, value) => keyWords.some(key => key.toLowerCase().includes(value))

const Contain = ({list, value, type}) => (
  type === 'list' ?
    (<div className="list-item">
      <ul className="contain">
        { list.map( (cell, i) => <Cell {...cell} key={i}/> ) }
      </ul>
    </div>) :
    (list
      .filter(item => item.children.length))
      .map((item, idx) => (
        <div className="category-item" key={idx}>
          <p className="category-item__title">{item.title.toUpperCase()}</p>
          <ul className="contain">
            { item.children.map( (cell, i) => <Cell {...cell} key={i}/> ) }
          </ul>
        </div>
    ))
)

export default Contain
