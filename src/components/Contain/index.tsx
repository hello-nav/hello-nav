import Cell from '../Cell'
import './index.css'

const Contain = (list: AppItem[]) => (
  <ul className="app-list">
    {list.map(cell => (
      <Cell {...cell} key={cell.name} />
    ))}
  </ul>
)

function ContainWrap({ list, type }: ContainWrapProp) {
  let contain
  if (type === 'list') {
    contain = Contain(list as AppItem[])
  } else {
    contain = (list as CateItem[]).reduce(
      (vmList: React.ReactElement[], cate: CateItem) => {
        const apps: AppItem[] = cate.children
        if (apps.length) {
          vmList.push(
            <div className="category-item" key={cate.title}>
              <h2 className="category-item__title">
                {cate.title.toUpperCase()}
              </h2>
              {Contain(apps)}
            </div>,
          )
        }
        return vmList
      },
      [],
    )
  }
  return <div className="contain-wrap">{contain}</div>
}

export default ContainWrap
