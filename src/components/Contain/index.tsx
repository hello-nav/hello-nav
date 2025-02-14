import Cell, { PlaceholderCell } from '../Cell'
import './index.less'

const Contain = (list: AppItem[], cate: CateItem | null, isSettingMode: boolean) => (
  <ul className="app-list">
    {list.map(cell => (
      <Cell
        {...cell}
        title={cate?.title}
        isSettingMode={isSettingMode}
        key={cell.name + (cell.favorite ? '_fav' : '') + (cell.hidden ? '_hid' : '')}
      />
    ))}
    {/* {isSettingMode && cate?.title !== 'favorites' && <PlaceholderCell key="empty" />} */}
  </ul>
)

function ContainWrap({ list, type, isSettingMode }: ContainWrapProp & { isSettingMode: boolean }) {
  let contain
  if (type === 'list') {
    contain = Contain(list as AppItem[], null, isSettingMode)
  } else {
    contain = (list as CateItem[]).reduce((vmList: React.ReactElement[], cate: CateItem) => {
      const { children: apps } = cate
      if (apps.length) {
        const id = cate.title.replace(/\//g, '')
        vmList.push(
          <div className="category-item" key={cate.title}>
            <h2 className="category-item__title" id={id}>
              <a href={'#' + id} className="category-item__title-link">
                {cate.title.toUpperCase()}
              </a>
            </h2>
            {Contain(apps, cate, isSettingMode)}
          </div>,
        )
      }
      return vmList
    }, [])
  }

  const containClass = ['contain-wrap', type, isSettingMode ? 'reverse' : ''].join(' ')
  return <div className={containClass}>{contain}</div>
}

export default ContainWrap
