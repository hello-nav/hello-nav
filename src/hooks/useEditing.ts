import { useCallback, useState, useRef } from 'react'
import { getPosition } from '../utils'

interface UseEditingReturn {
  open: boolean
  setOpen: (open: boolean) => void
  appModel: AppItem
  setAppModel: (app: AppItem) => void
  editApp: (app: AppItem, ref: HTMLElement | null) => void
  submitApp: (app: AppItem) => void
  modalPosi: Posi
  appRef: HTMLElement | null
}

const useEditing = (): UseEditingReturn => {
  const [open, setOpen] = useState(false)
  const [modalPosi, setModalPosi] = useState<Posi>({})
  const [appModel, setAppModel] = useState<AppItem>({
    name: '',
    homepage: '',
    icon: '',
  })
  const [appRef, setAppRef] = useState<HTMLElement | null>(null)
  const editApp = useCallback(
    (app: AppItem, ref: HTMLElement | null) => {
      setAppRef(ref)
      console.log(ref)
      setModalPosi(getPosition(ref))
      setAppModel({ ...app })
      setOpen(true)
      if (ref) {
        ref.style.visibility = 'hidden'
      }
    },
    [setOpen, setAppModel],
  )

  const submitApp = useCallback(
    (app: AppItem) => {
      setOpen(false)
      console.log(appRef)
      if (appRef) {
        appRef.style.visibility = 'visible'
      }
    },
    [setOpen, setAppModel],
  )

  return {
    open,
    setOpen,
    appModel,
    setAppModel,
    editApp,
    submitApp,
    modalPosi,
    appRef,
  }
}

export default useEditing
