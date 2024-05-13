import { useCallback, useState } from 'react'

interface UseEditingReturn {
  open: boolean
  setOpen: (open: boolean) => void
  appModel: AppItem
  setAppModel: (app: AppItem) => void
  editApp: (app: AppItem) => void
}

const useEditing = (): UseEditingReturn => {
  const [open, setOpen] = useState(false)
  const [appModel, setAppModel] = useState<AppItem>({
    name: '',
    homepage: '',
    icon: '',
  })

  const editApp = useCallback(
    (app: AppItem) => {
      setAppModel(app)
      setOpen(true)
    },
    [setOpen, setAppModel],
  )

  return {
    open,
    setOpen,
    appModel,
    setAppModel,
    editApp,
  }
}

export default useEditing
