import { useCallback, useEffect, useState } from 'react'
import { loadStorage, saveStorage } from '../utils'

interface UseFavoriteReturn {
  favoriteApps: AppItem[]
  toggleFavorite: (app: AppItem) => void
  moveLeft: (app: AppItem) => void
  moveRight: (app: AppItem) => void
  favoriteAppNames: string[]
}

const useFavorite = (): UseFavoriteReturn => {
  const [favoriteApps, setFavoriteApps] = useState<AppItem[]>(() =>
    loadStorage<AppItem[]>('HELLO_NAV_FAVORITE', []).map(formatFavorite),
  )
  const favoriteAppNames = favoriteApps.map(app => app.name)

  useEffect(() => {
    saveStorage('HELLO_NAV_FAVORITE', favoriteApps)
  }, [favoriteApps])

  const toggleFavorite = useCallback(
    (app: AppItem) =>
      setFavoriteApps(prevApps => {
        const index = prevApps.findIndex(item => item.name === app.name)
        if (index >= 0) {
          prevApps.splice(index, 1)
        } else {
          prevApps.push(app)
        }
        return prevApps.map(formatFavorite)
      }),
    [favoriteApps],
  )

  const moveLeft = useCallback(
    (app: AppItem) =>
      setFavoriteApps(prevApps => {
        const index = prevApps.findIndex(item => item.name === app.name)
        if (index > 0) {
          prevApps.splice(index, 1)
          prevApps.splice(index - 1, 0, app)
          return prevApps.map(formatFavorite)
        }
        return prevApps
      }),
    [setFavoriteApps],
  )

  const moveRight = useCallback(
    (app: AppItem) =>
      setFavoriteApps(prevApps => {
        const index = prevApps.findIndex(item => item.name === app.name)
        if (index < prevApps.length - 1) {
          prevApps.splice(index, 1)
          prevApps.splice(index + 1, 0, app)
          return prevApps.map(formatFavorite)
        }
        return prevApps
      }),
    [setFavoriteApps],
  )

  return {
    favoriteApps,
    toggleFavorite,
    moveLeft,
    moveRight,
    favoriteAppNames,
  }
}

function formatFavorite(app: AppItem, index: number, apps: AppItem[]) {
  return { ...app, favorite: true, first: index === 0, final: index === apps.length - 1 }
}

export default useFavorite
