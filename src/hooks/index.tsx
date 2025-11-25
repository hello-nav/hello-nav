import { useState, useEffect, createContext, useCallback } from 'react'

const AppsContext = createContext({
  favoriteApps: [] as Array<AppItem>,
  favoriteAppNames: [] as string[],
  setFavoriteApps: (apps: Array<AppItem>) => {},
  toggleFavorite: (app: AppItem) => {},
  moveLeft: (app: AppItem) => {},
  moveRight: (app: AppItem) => {},
  hiddenApps: [] as Array<AppItem>,
  hiddenAppNames: [] as string[],
  setHiddenApps: (apps: Array<AppItem>) => {},
  toggleVisible: (app: AppItem) => {},
  filterKey: '' as string,
  setFilterKey: (str: string) => {},
})

const AppsProvider = ({ children }: any) => {
  // favorite app
  const [favoriteApps, setFavoriteApps] = useState(() => {
    let apps: Array<AppItem> = []
    try {
      apps = JSON.parse(localStorage.getItem('HELLO_NAV_FAVORITE')!) || []
      apps.forEach((a, i) => {
        a.favorite = true
        if (!i) {
          a.first = true
        }
        if (i === apps.length - 1) {
          a.final = true
        }
      })
    } catch (_) {}
    return apps
  })

  const favoriteAppNames = Array.from(favoriteApps).map(app => app.name)

  useEffect(() => {
    localStorage.setItem('HELLO_NAV_FAVORITE', JSON.stringify(Array.from(favoriteApps)))
  }, [favoriteApps])

  const toggleFavorite = useCallback(
    (app: AppItem) => {
      const apps = Array.from(favoriteApps)
      const index = apps.findIndex(item => item.name === app.name)
      if (index >= 0) {
        apps.splice(index, 1)
      } else {
        apps.push({ ...app, favorite: true })
      }
      apps.forEach((a, i) => {
        delete a.first
        delete a.final
        if (!i) {
          a.first = true
        }
        if (i === apps.length - 1) {
          a.final = true
        }
      })
      setFavoriteApps(apps)
    },
    [favoriteApps],
  )

  const moveLeft = useCallback(
    (app: AppItem) => {
      const apps = Array.from(favoriteApps)
      const index = apps.findIndex(item => item.name === app.name)
      if (index > 0) {
        apps.splice(index, 1)
        apps.splice(index - 1, 0, { ...app })
        apps.forEach((a, i) => {
          delete a.first
          delete a.final
          if (!i) {
            a.first = true
          }
          if (i === apps.length - 1) {
            a.final = true
          }
        })
        setFavoriteApps(apps)
      }
    },
    [favoriteApps],
  )
  const moveRight = useCallback(
    (app: AppItem) => {
      const apps = Array.from(favoriteApps)
      const index = apps.findIndex(item => item.name === app.name)
      if (index < apps.length - 1) {
        apps.splice(index, 1)
        apps.splice(index + 1, 0, { ...app })
        apps.forEach((a, i) => {
          delete a.first
          delete a.final
          if (!i) {
            a.first = true
          }
          if (i === apps.length - 1) {
            a.final = true
          }
        })
        setFavoriteApps(apps)
      }
    },
    [favoriteApps],
  )

  // hidden app
  const [hiddenApps, setHiddenApps] = useState(() => {
    let apps: Array<AppItem> = []
    try {
      apps = JSON.parse(localStorage.getItem('HELLO_NAV_HIDDEN')!) || []
      apps.forEach(a => (a.hidden = true))
    } catch (_) {}
    return apps
  })

  const hiddenAppNames = Array.from(hiddenApps).map(app => app.name)

  useEffect(() => {
    localStorage.setItem('HELLO_NAV_HIDDEN', JSON.stringify(Array.from(hiddenApps)))
  }, [hiddenApps])

  const toggleVisible = useCallback(
    (app: AppItem) => {
      const list = Array.from(hiddenApps)
      const index = list.findIndex(item => item.name === app.name)
      if (index >= 0) {
        list.splice(index, 1)
      } else {
        list.push({ ...app, hidden: true })
      }
      setHiddenApps(list)
    },
    [hiddenApps],
  )

  const [filterKey, setFilterKey] = useState<string>('')

  const value = {
    favoriteApps,
    favoriteAppNames,
    setFavoriteApps,
    toggleFavorite,
    moveLeft,
    moveRight,
    hiddenApps,
    hiddenAppNames,
    setHiddenApps,
    toggleVisible,
    filterKey,
    setFilterKey,
  }

  return <AppsContext.Provider value={value}>{children}</AppsContext.Provider>
}

export { AppsContext, AppsProvider }

// Hook to detect current theme
export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('theme--dark')
  })

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('theme--dark'))
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  return isDark
}
