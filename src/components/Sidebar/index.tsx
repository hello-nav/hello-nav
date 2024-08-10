import { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'
import iconFavorite from '../../assets/images/icon-favorite-active.svg'
import iconFramework from '../../assets/images/icon-framework.svg'
import iconLibrary from '../../assets/images/icon-library.svg'
import iconHtmlCss from '../../assets/images/icon-html-css.svg'
import iconUIDesign from '../../assets/images/icon-design.svg'
import iconServer from '../../assets/images/icon-server.svg'
import iconOther from '../../assets/images/icon-other.svg'
import iconWebsite from '../../assets/images/icon-website.svg'
import iconTop from '../../assets/images/icon-top.svg'
import './index.less'

const icons: any = {
  favorites: iconFavorite,
  framework: iconFramework,
  library: iconLibrary,
  'html/css': iconHtmlCss,
  'ui/design': iconUIDesign,
  'runtime/server': iconServer,
  other: iconOther,
  website: iconWebsite,
}

const Sidebar = ({ list, type, hasFavorite }: ContainWrapProp & { hasFavorite: boolean }) => {
  const [currentAnchor, setCurrentAnchor] = useState<string | null>(null)
  const [showGoTop, setShowGoTop] = useState<boolean | null>(null)
  useEffect(() => {
    const anchors: NodeListOf<HTMLElement> = document.querySelectorAll('h2[id]')
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 240
      setShowGoTop(scrollPosition >= 1000)
      let activeAnchor = null
      for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i]
        if (scrollPosition >= anchor.offsetTop) {
          activeAnchor = anchor.id
        }
      }
      setCurrentAnchor(activeAnchor)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasFavorite, type, list])

  if (!hasFavorite) {
    list = (list as CateItem[]).filter(v => v.title !== 'favorites')
  }

  function goToAnchor(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) {
    e.preventDefault()
    const target = document.getElementById(id)
    target && window.scrollTo({ top: target.offsetTop - 180, behavior: 'smooth' })
    return false
  }

  function goTop(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return false
  }

  return type === 'category' ? (
    <div className="sidebar">
      <div className="navbar">
        {(list as CateItem[])
          .filter(v => v.children.length)
          .map(item => {
            const { title } = item
            return (
              <a
                href={`#${title}`}
                title={title.toUpperCase()}
                key={title}
                className={currentAnchor === title ? 'active' : ''}
                draggable={false}
                onClick={e => goToAnchor(e, title)}
              >
                <div>
                  <ReactSVG className="icon" src={icons[title]}></ReactSVG>
                </div>
                <div className="sidebar__title">{title.toUpperCase()}</div>
              </a>
            )
          })}
      </div>
      <a
        href="#root"
        title="Go Top"
        draggable={false}
        className={`go-top ${showGoTop ? 'show' : ''}`}
        onClick={e => goTop(e)}
      >
        <ReactSVG className="icon" src={iconTop}></ReactSVG>
      </a>
    </div>
  ) : null
}

export default Sidebar
