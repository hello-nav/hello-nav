import React from 'react'
import Cell from '../Cell'
import './index.css'

const genFilterByKey = (filterKey: string) => (list: AppItem[]) =>
  list.filter(({ keyWords }: any) => keyWords.some((item: string) =>
      item
        .toLowerCase()
        .replace(/[ -]/g, '')
        .includes(filterKey)
    ))

const Contain = (list: object[]) => (
  <ul className="contain">
    { list.map( (cell, i) => <Cell {...cell} key={i+''}/> ) }
  </ul>
)

const ContainWrap = ({ list, type, filterKey }: any) => {
  const key = filterKey.trim().toLowerCase().replace(/[ -]/g, '')
  const filterList = genFilterByKey(key)

  let conain
  if (type === 'list') {
    conain = (
      <div className="list-wrap">
        {Contain(filterList(list))}
      </div>
    )
  } else {
    return list.reduce((vmList: React.ReactElement[], item: any, idx: number) => {
      const apps = filterList(item.childrens)
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
