import React, { useState } from 'react'
import libraryTree from '../../mock'
import FilterBar from '../FilterBar'
import ContainWrap from '../Contain'
import WithError from '../WithError'
import Footer from '../Footer'
import { IGNORE_KEYWORD_REG, transformAppKeyWords } from '../../utils'

const CATEGORY_TYPES: CategoryTypes = ['list', 'category']
const ContainWithNotFind = WithError(ContainWrap, 'Ooops! Can not find it here...')

const libraryMap: LibraryMap = {
  category: libraryTree,
  list: libraryTree.reduce((res: AppItem[], item: CateItem) => {
    item.children.forEach(transformAppKeyWords)
    res.push(...item.children)
    return res
  }, []),
}

const filterListByKey = (
  list: AppItem[],
  key: string,
) => list.filter(app => (app.keyWords as string[]).some(k => k.includes(key)))

const genFilterByList = (list: (AppItem | CateItem)[]) => (filterKey: string) => {
  if (window.localStorage.__CATEGORY_TYPE__ === 'list') {
    return filterListByKey((list as AppItem[]), filterKey)
  }
  return (list as CateItem[])
    .map(cate => ({
      title: cate.title,
      children: filterListByKey(cate.children, filterKey),
    }))
}
const filtersMap: FiltersMap = CATEGORY_TYPES
  .reduce((res: any, key) => {
    res[key] = genFilterByList(libraryMap[key])
    return res
  }, {})

let oldFilterKey = ''
let typeIndex: number = 0
const toggleType = (setType: any, setList: any, type?: CategoryType) => {
  typeIndex = (typeIndex + 1) % 2
  type = CATEGORY_TYPES[typeIndex]
  window.localStorage.__CATEGORY_TYPE__ = type
  setType(type)
  if (oldFilterKey) {
    setList(filtersMap[type](oldFilterKey))
  } else {
    setList(libraryMap[type])
  }
}

function App() {
  const { __CATEGORY_TYPE__ } = window.localStorage
  const [type, setType] = useState<CategoryType>(__CATEGORY_TYPE__ || CATEGORY_TYPES[0])
  if (!__CATEGORY_TYPE__) {
    window.localStorage.__CATEGORY_TYPE__ = type
  }

  const [list, setList] = useState<(AppItem | CateItem)[]>(libraryMap[type])
  const [filterKey, setFilterKey] = useState<string>('')
  typeIndex = CATEGORY_TYPES.indexOf(type)

  const newFilterKey = filterKey
    .trim()
    .toLowerCase()
    .replace(IGNORE_KEYWORD_REG, '')
  if (oldFilterKey !== newFilterKey) {
    setList(filtersMap[type](newFilterKey))
    oldFilterKey = newFilterKey
  }

  const hasData = type === 'category'
    ? (list as CateItem[]).filter(cate => cate.children.length).length
    : (list as AppItem[]).length

  return (
    <div className="body">
      <FilterBar
        filterKey={filterKey}
        onInput={(e: any) => setFilterKey(e.target.value)}
        type={type}
        toggleType={() => toggleType(setType, setList)}
      />
      <div className="main">
        <ContainWithNotFind list={list} type={type} isError={!hasData} />
      </div>
      <Footer />
    </div>
  )
}

export default App
