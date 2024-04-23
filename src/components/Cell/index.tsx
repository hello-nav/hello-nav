import { useContext } from 'react'
import { AppsContext } from '../../hooks/index'
import gitHubIcon from '../../assets/images/github.png'
import './index.less'

function onCornerClick(e: React.SyntheticEvent, repository: string) {
  e.preventDefault()
  window.open(repository)
  return false
}

function getImgSrc(fileName: string): string {
  return new URL(`../../assets/icons/${fileName}`, import.meta.url).href
}

const Cell = (appItem: AppItem & { title: string | undefined; isSettingMode: boolean }) => {
  const { name, icon, homepage, repository, darkInvert, lessRadius, title } = appItem
  const { favoriteAppNames, hiddenAppNames, toggleFavorite, toggleVisible } = useContext(AppsContext)
  const imgClass = [darkInvert ? 'dark-invert' : '', lessRadius ? 'less-radius' : ''].join(' ')
  const size =
    name.length > 11
      ? name.length > 12
        ? name.length > 13
          ? name.length > 14
            ? 'micro'
            : 'mini'
          : 'tiny'
        : 'small'
      : 'normal'

  const isFavoriteApp =
    (!title || title !== 'favorites') && !appItem.favorite && favoriteAppNames.includes(appItem.name)
  const isHiddenApp = hiddenAppNames.includes(appItem.name)
  const visible = isHiddenApp ? appItem.isSettingMode : true || isFavoriteApp

  return !isFavoriteApp ? (
    <li className={`cell ${isHiddenApp ? 'hide' : ''} ${appItem.favorite ? 'favorite' : ''}`}>
      <a className="app" href={homepage} title={name}>
        <div className="img-box">
          <img src={getImgSrc(icon)} className={imgClass} alt={name} />
        </div>
        <p className="title" data-size={size}>
          {name}
        </p>
        {repository && (
          <div onKeyDown={() => {}} onClick={e => onCornerClick(e, repository)} className="corner">
            <div className="corner-icon-wrap">
              <img className="corner-icon" draggable={false} src={gitHubIcon} alt="" />
            </div>
          </div>
        )}
      </a>
      <div className="app-back">
        <div className="app-setting-head">
          <img src={getImgSrc(icon)} className={imgClass} alt={name} />
          <p className="title" data-size={size} title={name}>
            {name}
          </p>
        </div>
        <div className="app-setting-content">
          {/* <div
            className={`icon ${hiddenAppNames.includes(appItem.name) ? 'icon-hide' : 'icon-show'}`}
            onClick={() => toggleVisible(appItem)}
          ></div> */}
          <div
            className={`icon ${appItem.favorite ? 'icon-favorite-active' : 'icon-favorite'}`}
            onClick={() => toggleFavorite(appItem)}
          ></div>
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
