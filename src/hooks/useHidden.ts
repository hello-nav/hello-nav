import { useCallback, useEffect, useState } from 'react'
import { loadStorage, saveStorage } from '../utils'

interface UseHiddenReturn {
  hiddenApps: AppItem[]
  toggleVisible: (app: AppItem) => void
}

const useHidden = (): UseHiddenReturn => {
  const [hiddenApps, setHiddenApps] = useState<AppItem[]>(() =>
    loadStorage<AppItem[]>('HELLO_NAV_HIDDEN', []).map(app => ({
      ...app,
      hidden: true,
    })),
  )

  useEffect(() => {
    saveStorage('HELLO_NAV_HIDDEN', hiddenApps)
  }, [hiddenApps])

  const toggleVisible = useCallback(
    (app: AppItem) => {
      setHiddenApps(prevApps => {
        const nextApps = prevApps.filter(item => item.name !== app.name)
        if (nextApps.length === prevApps.length) {
          return [...nextApps, { ...app, hidden: true }]
        }
        return nextApps
      })
    },
    [setHiddenApps],
  )

  return {
    hiddenApps,
    toggleVisible,
  }
}

export default useHidden
