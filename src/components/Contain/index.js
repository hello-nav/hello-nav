import React from 'react'
import Cell from '../Cell'
import './index.css'

const Contain = list => (
  <ul className="contain">
    { list.map( (cell, i) => <Cell {...cell} key={i}/> ) }
  </ul>
)

const ContainWrap = ({list, value, type}) =>
  <div className="contain-wrap">
    {
      type === 'list' ?
        (<div className="list-wrap">
          {Contain(list)}
        </div>) :
        (list.map((item, idx) => (
          <div className="category-item" key={idx}>
            <p className="category-item__title">{item.title.toUpperCase()}</p>
            {Contain(item.children)}
          </div>
        )))
    }
  </div>


export default ContainWrap
