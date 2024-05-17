import React, { createContext, useMemo, ReactNode } from 'react'
import useFavorite from './useFavorite'
import useHidden from './useHidden'
import useFilter from './useFilter'
import useEditing from './useEditing'

interface AppsContextValue {
  favorite: ReturnType<typeof useFavorite>
  hidden: ReturnType<typeof useHidden>
  filter: ReturnType<typeof useFilter>
  editing: ReturnType<typeof useEditing>
}

export const AppsContext = createContext<AppsContextValue>({
  favorite: {
    favoriteApps: [],
    favoriteAppNames: [],
    toggleFavorite: () => {},
    moveLeft: () => {},
    moveRight: () => {},
  },
  hidden: {
    hiddenApps: [],
    toggleVisible: () => {},
  },
  filter: {
    filterKey: '',
    setFilterKey: () => {},
  },
  editing: {
    open: false,
    setOpen: () => {},
    appModel: { name: '', homepage: '', icon: '' },
    setAppModel: () => {},
    editApp: () => {},
    submitApp: () => {},
    modalPosi: {},
    appRef: null,
  },
})

interface AppsProviderProps {
  children: ReactNode
}

export const AppsProvider: React.FC<AppsProviderProps> = ({ children }) => {
  const favorite = useFavorite()
  const hidden = useHidden()
  const filter = useFilter()
  const editing = useEditing()

  const value = useMemo<AppsContextValue>(
    () => ({
      favorite,
      hidden,
      filter,
      editing,
    }),
    [favorite, hidden, filter, editing],
  )

  return <AppsContext.Provider value={value}>{children}</AppsContext.Provider>
}
