import React, { useState } from 'react'
import libraryTree from '../../mock'
import FilterBar from '../FilterBar'
import ContainWrap from '../Contain'
import WithError from '../WithError'
import Footer from '../Footer'

const CATEGORY_TYPES: CategoryTypes = ['list', 'category']
const libraryMap: any = {
  category: libraryTree,
  list: libraryTree.reduce((res: object[], item: {childrens: object[]}) => {
    res.push(...item.childrens)
    return res
  }, [])
}

const ContainWithNotFind = WithError(ContainWrap, 'Ooops! Can not find it here...')
// const genFilterByKey = (filterKey: string) => (list: AppItem[]) =>
//   list.filter(({ keyWords }: any) => keyWords.some((item: string) =>
//       item
//         .toLowerCase()
//         .replace(/[ -]/g, '')
//         .includes(filterKey)
//     ))

let typeIndex: number = 0
let toggleType: () => void

function App () {
  const [type, setType] = useState(window.localStorage.__CATEGORY_TYPE__ || CATEGORY_TYPES[0])
  let [list, setList] = useState(libraryMap[type])
  let [filterKey, setFilterKey] = useState('')

  typeIndex = CATEGORY_TYPES.indexOf(type)

  !toggleType && (toggleType = () => {
    typeIndex = (typeIndex + 1) % 2
    const type = CATEGORY_TYPES[typeIndex]
    setType(type)
    setList(libraryMap[type])
    window.localStorage.__CATEGORY_TYPE__ = type
  })

  return (
    <div>
      <FilterBar
        filterKey={filterKey}
        onInput={(e: any) => setFilterKey(e.target.value)}
        type={type}
        toggleType={toggleType}
      />
      <ContainWithNotFind
        filterKey={filterKey}
        type={type}
        list={list}
        isError={!list.length}
      />
      <Footer/>
    </div>
  )
}

export default App
