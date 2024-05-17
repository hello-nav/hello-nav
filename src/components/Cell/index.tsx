import { useContext, useRef } from 'react'
import { AppsContext } from '@/hooks/index'
import gitHubIcon from '@/assets/images/github.png'
import IconButton from '@/components/IconButton'
import './index.less'

function onClickApp(appItem: AppItem) {
  try {
    gtag('event', 'click', {
      event_category: 'App',
      event_label: 'app',
      value: appItem.name,
    })
  } catch (e) {}
}

function onCornerClick(e: React.SyntheticEvent, appItem: AppItem) {
  e.preventDefault()
  e.stopPropagation()
  try {
    gtag('event', 'click', {
      event_category: 'App',
      event_label: 'app-repo',
      value: appItem.name,
    })
  } catch (e) {}
  window.open(appItem.repository)
  return false
}

function getImgSrc(fileName: string): string {
  return new URL(`../../assets/icons/${fileName}`, import.meta.url).href
}

const Cell = (appItem: AppItem & { title: string | undefined; isSettingMode: boolean }) => {
  const { name, icon, homepage, repository, darkInvert, lessRadius, title } = appItem
  const { favoriteAppNames, moveLeft, moveRight, toggleFavorite } = useContext(AppsContext).favorite
  const { filterKey } = useContext(AppsContext).filter
  const { editApp } = useContext(AppsContext).editing

  const appBackRef = useRef<HTMLLIElement>(null)
  const handleEditApp = () => {
    editApp(appItem, appBackRef.current)
  }

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

  return !isFavoriteApp ? (
    <li className={`cell ${appItem.favorite ? 'favorite' : ''}`} ref={appBackRef}>
      <a className="app" href={homepage} title={name} onClick={() => onClickApp(appItem)}>
        <div className="img-box">
          <img src={getImgSrc(icon)} className={imgClass} alt={name} />
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
          <img src={getImgSrc(icon)} className={imgClass} alt={name} />
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
          <div>
            <IconButton
              name={appItem.favorite ? 'favorite-active' : 'favorite'}
              onClick={() => toggleFavorite(appItem)}
            ></IconButton>
            <IconButton name="edit" onClick={handleEditApp}></IconButton>
          </div>
          <div>
            <IconButton
              name="left"
              disabled={appItem.first || !!filterKey}
              onClick={() => moveLeft(appItem)}
            ></IconButton>
            <IconButton
              name="right"
              disabled={appItem.final || !!filterKey}
              onClick={() => moveRight(appItem)}
            ></IconButton>
          </div>
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
