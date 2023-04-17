// import './index.css'
import Image from 'next/image'
import gitHubIcon from '../../assets/images/github.png'

function onCornerClick(e: React.SyntheticEvent, repository: string) {
  e.preventDefault()
  globalThis.open?.(repository)
  return false
}

function getImgSrc(fileName: string): string {
  return `/icons/${fileName}`
}

const Cell = ({ homepage, icon, repository, name, darkInvert, lessRadius }: AppItem) => {
  const imgClass = [darkInvert ? 'dark-invert' : '', lessRadius ? 'less-radius' : ''].join(' ')
  return <li className="cell">
    <a className="app" href={homepage} title={name}>
      <div className="img-box">
        <Image
          src={getImgSrc(icon)}
          className={imgClass}
          alt={name}
          width={50}
          height={50}
        />
      </div>
      <p className="title">{name}</p>
      {repository && (
        <div
          onKeyDown={() => {}}
          onClick={e => onCornerClick(e, repository)}
          className="corner"
        >
          <div className="corner-icon-wrap">
            <Image
              className="corner-icon"
              draggable={false}
              src={gitHubIcon.src}
              alt=""
              width={13}
              height={13}
            />
          </div>
        </div>
      )}
    </a>
  </li>
}

export default Cell
