import './index.less'
import gitHubIcon from '../../assets/images/github.png'

function onCornerClick(e: React.SyntheticEvent, repository: string) {
  e.preventDefault()
  window.open(repository)
  return false
}

function getImgSrc(fileName: string): string {
  return new URL(`../../assets/icons/${fileName}`, import.meta.url).href
}

const Cell = ({ homepage, icon, repository, name, darkInvert, lessRadius }: AppItem) => {
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
  return (
    <li className="cell">
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
    </li>
  )
}

export default Cell
