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
  useEffect(() => {
    const anchors: NodeListOf<HTMLElement> = document.querySelectorAll('h2[id]')
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 240
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
  }, [hasFavorite])

  if (!hasFavorite) {
    list = (list as CateItem[]).filter(v => v.title !== 'favorites')
  }

  return type === 'category' ? (
    <div className="sidebar">
      {list.map(item => {
        const { title } = item as CateItem
        return (
          <a
            href={`#${title}`}
            title={title.toUpperCase()}
            key={title}
            className={currentAnchor === title ? 'active' : ''}
          >
            <div>
              <ReactSVG className="icon" src={icons[title]}></ReactSVG>
            </div>
            <div className="sidebar__title">{title.toUpperCase()}</div>
          </a>
        )
      })}
    </div>
  ) : null
}

export default Sidebar
