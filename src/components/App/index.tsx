import { useState, useContext, useEffect } from 'react'
import { IGNORE_KEYWORD_REG, transformAppKeyWords } from '../../utils'
import { AppsContext } from '../../hooks/index'
import libraryTree from '../../model'
import ActionBar from '../ActionBar'
import ContainWrap from '../Contain'
import WithError from '../WithError'
import Footer from '../Footer'

const CATEGORY_TYPES: CategoryTypes = ['category', 'list']
const ContainWithNotFind = WithError<ContainWrapProp>(ContainWrap, "Oops! Couldn't find it here...")

const libraryMap: LibraryMap = {
  category: libraryTree,
  list: libraryTree.reduce((res: AppItem[], item: CateItem) => {
    item.children.forEach(transformAppKeyWords)
    res.push(...item.children)
    return res
  }, []),
}

const filterListByKey = (list: AppItem[], key: string) =>
  list.filter(app => (app.keywords as string[]).some(k => k.includes(key)))

const genFilteredByList = (list: (AppItem | CateItem)[], type: CategoryType, filterKey: string) => {
  if (type === 'list') {
    return filterListByKey(list as AppItem[], filterKey)
  }
  return (list as CateItem[]).map(cate => ({
    title: cate.title,
    children: filterListByKey(cate.children, filterKey),
  }))
}

let typeIndex: number = 0

function App() {
  const { __CATEGORY_TYPE__ } = window.localStorage
  const [type, setType] = useState<CategoryType>(__CATEGORY_TYPE__ || CATEGORY_TYPES[0])
  if (!__CATEGORY_TYPE__) {
    window.localStorage.__CATEGORY_TYPE__ = type
  }
  const [filterKey, setFilterKey] = useState<string>('')
  const newFilterKey = filterKey.trim().toLowerCase().replace(IGNORE_KEYWORD_REG, '')

  const { favoriteApps } = useContext(AppsContext)
  const libraries: (AppItem | CateItem)[] =
    type === 'category'
      ? [
          {
            title: 'favorites',
            children: favoriteApps,
          },
          ...libraryMap[type],
        ]
      : [...favoriteApps, ...libraryMap[type]]

  let filteredLibraries = genFilteredByList(libraries, type, newFilterKey)

  useEffect(() => {
    window.localStorage.__CATEGORY_TYPE__ = type
  }, [type])

  typeIndex = CATEGORY_TYPES.indexOf(type)
  const [isSettingMode, setIsSettingMode] = useState(false)

  function toggleType() {
    typeIndex = (typeIndex + 1) % 2
    setType(CATEGORY_TYPES[typeIndex])
  }

  const hasData =
    type === 'list'
      ? (filteredLibraries as AppItem[]).length
      : (filteredLibraries as CateItem[]).some(cate => cate.children.length)

  return (
    <div className="body">
      <ActionBar
        filterKey={filterKey}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => setFilterKey(e.target.value)}
        onClear={() => setFilterKey('')}
        type={type}
        isSettingMode={isSettingMode}
        toggleType={toggleType}
        toggleSetting={() => setIsSettingMode(!isSettingMode)}
      />
      <div className="main">
        <ContainWithNotFind list={filteredLibraries} type={type} isSettingMode={isSettingMode} isError={!hasData} />
      </div>
      <Footer />
    </div>
  )
}

export default App
