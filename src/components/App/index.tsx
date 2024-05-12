import { useState, useContext, useEffect } from 'react'
import { IGNORE_KEYWORD_REG, transformAppKeyWords } from '@/utils'
import { AppsContext } from '@/hooks/index'
import libraryTree from '@/model'
import ActionBar from '../ActionBar'
import ContainWrap from '../Contain'
import WithError from '../WithError'
import Message from '../WithError/Message'
import Footer from '../Footer'

const CATEGORY_TYPES: CategoryTypes = ['category', 'list']
const ContainWithNotFind = WithError<ContainWrapProp>(ContainWrap, Message)

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

function App() {
  const { __CATEGORY_TYPE__ } = window.localStorage
  const [type, setType] = useState<CategoryType>(__CATEGORY_TYPE__ || CATEGORY_TYPES[0])
  if (!__CATEGORY_TYPE__) {
    window.localStorage.__CATEGORY_TYPE__ = type
  }

  const [isSettingMode, setIsSettingMode] = useState(false)
  const { favoriteApps, filterKey, setFilterKey } = useContext(AppsContext)
  const newFilterKey = filterKey.trim().toLowerCase().replace(IGNORE_KEYWORD_REG, '')
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

  function toggleType() {
    const typeIndex = CATEGORY_TYPES.indexOf(type)
    setType(CATEGORY_TYPES[(typeIndex + 1) % 2])
  }

  const resultAppCount =
    type === 'list'
      ? (filteredLibraries as AppItem[]).length
      : (filteredLibraries as CateItem[]).reduce((c, cate) => c + cate.children.length, 0)

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
        <ContainWithNotFind
          list={filteredLibraries}
          type={type}
          filterKey={filterKey}
          isSettingMode={isSettingMode}
          resultAppCount={resultAppCount}
          isError={!resultAppCount}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
