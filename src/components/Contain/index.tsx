import React from 'react'
import Cell from '../Cell'
import './index.css'

const Contain = (list: object[]) => (
  <ul className="contain">
    { list.map( (cell, i) => <Cell {...cell} key={i+''}/> ) }
  </ul>
)

const ContainWrap = ({ list, type }: any) => {
  let conain
  if (type === 'list') {
    conain = (
      <div className="list-wrap">
        {Contain(list)}
      </div>
    )
  } else {
    return list.reduce((vmList: React.ReactElement[], item: any, idx: number) => {
      const apps = item.childrens
      if (apps.length) {
        vmList.push((
          <div className="category-item" key={idx}>
            <p className="category-item__title">
              {item.title.toUpperCase()}
            </p>
            {Contain(apps)}
          </div>
        ))
      }
      return vmList
    }, [])
  }
  return (
    <div className="contain-wrap">
      {conain}
    </div>
  )
}

export default ContainWrap
