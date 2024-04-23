import { useState, useEffect, createContext, useCallback } from 'react'

const AppsContext = createContext({
  favoriteApps: [] as Array<AppItem>,
  favoriteAppNames: [] as string[],
  setFavoriteApps: (apps: Array<AppItem>) => {},
  toggleFavorite: (app: AppItem) => {},
  hiddenApps: [] as Array<AppItem>,
  hiddenAppNames: [] as string[],
  setHiddenApps: (apps: Array<AppItem>) => {},
  toggleVisible: (app: AppItem) => {},
})

const AppsProvider = ({ children }: any) => {
  // favorite app
  const [favoriteApps, setFavoriteApps] = useState(() => {
    let apps: Array<AppItem> = []
    try {
      apps = JSON.parse(localStorage.getItem('HELLO_NAV_FAVORITE')!) || []
      apps.forEach(a => (a.favorite = true))
    } catch (_) {}
    return apps
  })

  const favoriteAppNames = Array.from(favoriteApps).map(app => app.name)

  useEffect(() => {
    localStorage.setItem('HELLO_NAV_FAVORITE', JSON.stringify(Array.from(favoriteApps)))
  }, [favoriteApps])

  const toggleFavorite = useCallback(
    (app: AppItem) => {
      const list = Array.from(favoriteApps)
      const index = list.findIndex(item => item.name === app.name)
      if (index >= 0) {
        list.splice(index, 1)
      } else {
        list.push({ ...app, favorite: true })
      }
      setFavoriteApps(list)
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

  const value = {
    favoriteApps,
    favoriteAppNames,
    setFavoriteApps,
    toggleFavorite,
    hiddenApps,
    hiddenAppNames,
    setHiddenApps,
    toggleVisible,
  }

  return <AppsContext.Provider value={value}>{children}</AppsContext.Provider>
}

export { AppsContext, AppsProvider }
