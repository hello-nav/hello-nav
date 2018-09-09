import React from 'react'
import Cell from '../Cell'
import './index.css'

const Contain = ({list}) => (
  <ul className="contain">
    { list.map( (item, idx) => <Cell {...item} key={idx}/> ) }
  </ul>
)

export default Contain