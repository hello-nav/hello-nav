import React from 'react'
import Cell from '../Cell'
import './index.css'

const Contain = (list: object[]) => (
  <ul className="app-list">
    { list.map((cell, i) => <Cell {...cell} key={`${i}`} />) }
  </ul>
)

const ContainWrap = ({ list, type }: any) => {
  let contain
  if (type === 'list') {
    contain = Contain(list)
  } else {
    contain = list.reduce((vmList: React.ReactElement[], cate: CateItem, idx: number) => {
      const apps = cate.children
      if (apps.length) {
        vmList.push((
          <div className="category-item" key={idx}>
            <h2 className="category-item__title">
              {cate.title.toUpperCase()}
            </h2>
            {Contain(apps)}
          </div>
        ))
      }
      return vmList
    }, [])
  }
  return (
    <div className="contain-wrap">
      {contain}
    </div>
  )
}

export default ContainWrap
