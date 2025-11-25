import { useContext } from 'react'
import { AppsContext, useTheme } from '../../hooks/index'
import gitHubIcon from '../../assets/images/github.png'
import './index.less'

function onClickApp(appItem: AppItem) {
  try {
    gtag('event', `click-link_${appItem.name.replace(/ /g, '-')}`, {
      value: appItem.name.replace(/ /g, '-'),
    })
  } catch (e) {}
}

function onCornerClick(e: React.SyntheticEvent, appItem: AppItem) {
  e.preventDefault()
  e.stopPropagation()
  try {
    gtag('event', `click-repo-link_${appItem.name.replace(/ /g, '-')}`, {
      value: appItem.name.replace(/ /g, '-'),
    })
  } catch (e) {}
  window.open(appItem.repository)
  return false
}

const chinesePattern = /^[\u4e00-\u9fff]+$/
const sizeChineseMapping = {
  normal: [0, 4],
  small: [5, 5],
  tiny: [6, 6],
  mini: [7, 7],
  micro: [8, Infinity],
}
const sizeEnglishMapping = {
  normal: [0, 10],
  small: [11, 11],
  tiny: [12, 12],
  mini: [13, 13],
  micro: [14, Infinity],
}
const getSize = (text: string) => {
  const length = text.length
  const mapping = chinesePattern.test(text) ? sizeChineseMapping : sizeEnglishMapping
  for (const [size, [min, max]] of Object.entries(mapping)) {
    if (length >= min && length <= max) {
      return size
    }
  }
  return 'normal'
}

const Cell = (appItem: AppItem & { title: string | undefined; isSettingMode: boolean }) => {
  const { name, icon, iconDark, homepage, repository, darkInvert, lessRadius, title } = appItem
  const { favoriteAppNames, hiddenAppNames, filterKey, moveLeft, moveRight, toggleFavorite, toggleVisible } =
    useContext(AppsContext)
  const imgClass = [darkInvert ? 'dark-invert' : '', lessRadius ? 'less-radius' : ''].join(' ')
  const size = getSize(name)
  const isDark = useTheme()

  // Choose the appropriate icon based on theme
  const currentIcon = isDark && iconDark ? iconDark : icon

  const isFavoriteApp =
    (!title || title !== 'favorites') && !appItem.favorite && favoriteAppNames.includes(appItem.name)
  const isHiddenApp = hiddenAppNames.includes(appItem.name)
  const visible = isHiddenApp ? appItem.isSettingMode : true || isFavoriteApp

  return !isFavoriteApp ? (
    <li className={`cell ${isHiddenApp ? 'hide' : ''} ${appItem.favorite ? 'favorite' : ''}`}>
      <a className="app" href={homepage} title={name} onClick={() => onClickApp(appItem)}>
        <div className="img-box">
          <img src={currentIcon} className={imgClass} alt={name} />
        </div>
        <p className="title" data-size={size}>
          {name}
        </p>
        {repository && (
          <div onKeyDown={() => {}} onClick={e => onCornerClick(e, appItem)} className="corner">
            <div className="corner-icon-wrap">
              <img className="corner-icon" draggable={false} src={gitHubIcon} alt="" />
            </div>
          </div>
        )}
      </a>
      <div className="app-back">
        <div className="app-setting-head">
          <img src={currentIcon} className={imgClass} alt={name} />
          <p className="title" data-size={size} title={name}>
            {name}
          </p>
        </div>
        <div className="app-setting-content">
          {/* {!appItem.favorite && (
            <div
              className={`icon ${hiddenAppNames.includes(appItem.name) ? 'icon-hide' : 'icon-show'}`}
              onClick={() => toggleVisible(appItem)}
            ></div>
          )} */}
          {appItem.favorite && !filterKey && (
            <div
              className={`icon icon-left ${appItem.first ? 'disabled' : ''}`}
              onClick={() => moveLeft(appItem)}
            ></div>
          )}
          <div
            className={`icon ${appItem.favorite ? 'icon-favorite-active' : 'icon-favorite'}`}
            onClick={() => toggleFavorite(appItem)}
          ></div>
          {appItem.favorite && !filterKey && (
            <div
              className={`icon icon-right ${appItem.final ? 'disabled' : ''}`}
              onClick={() => moveRight(appItem)}
            ></div>
          )}
          {/* <div className="icon icon-edit" onClick={() => onEditApp(appItem)}></div> */}
        </div>
      </div>
    </li>
  ) : null
}

export const PlaceholderCell = () => (
  <li className="cell">
    <div className="app-placeholder">
      <span className="icon icon-add"></span>
    </div>
  </li>
)

export default Cell
