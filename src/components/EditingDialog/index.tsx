import { useContext, useEffect, useRef } from 'react'
import { AppsContext } from '@/hooks'
import { cn } from '@/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import './index.less'

export default () => {
  const { open, appModel, submitApp, setAppModel, modalPosi, appRef } = useContext(AppsContext).editing
  const dialogRef = useRef<HTMLDivElement>(null)
  const dialogContentRef = useRef<HTMLDivElement>(null)
  const dialogContentBackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!dialogContentRef.current || !dialogContentBackRef.current || !appRef) return
    dialogContentBackRef.current.innerHTML = appRef.querySelector('.app-back')!.innerHTML
    document.body.style.overflow = 'hidden'
    dialogContentRef.current.animate(
      [
        {
          offset: 0,
          width: '90px',
          height: '90px',
          left: modalPosi.left,
          top: modalPosi.top,
          boxShadow: 'none',
          transform: `translate(0, 0) rotateY(${modalPosi.direction === 'left' ? '' : '-'}180deg)`,
        },
      ],
      {
        duration: 600,
        easing: 'cubic-bezier(0.6, 0.6, 0, 1)',
      },
    )
  })

  function onSubmit() {
    if (!dialogContentRef.current || !dialogContentBackRef.current || !appRef) return
    dialogRef.current!.classList.add('closing')
    dialogContentBackRef.current!.classList.add('closing')
    const animation = dialogContentRef.current.animate(
      [
        {
          offset: 1,
          width: '90px',
          height: '90px',
          left: modalPosi.left,
          top: modalPosi.top,
          boxShadow: 'none',
          transform: `translate(0, 0) rotateY(${modalPosi.direction === 'left' ? '' : '-'}180deg)`,
        },
      ],
      {
        duration: 600,
        easing: 'cubic-bezier(0.6, 0.6, 0, 1)',
        fill: 'forwards',
      },
    )

    animation.finished.then(() => {
      appRef.style.visibility = 'visible'
      document.body.style.overflow = 'initial'
      submitApp(appModel)
    })
  }

  return open ? (
    <div className="dialog" ref={dialogRef}>
      <div className="dialog-content" ref={dialogContentRef}>
        <div className="dialog-content-front">
          <form className={cn('grid items-start gap-4')} onSubmit={e => e.preventDefault()}>
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={appModel.name}
                onChange={e => setAppModel({ ...appModel, name: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="homepage">Homepage</Label>
              <Input
                id="Homepage"
                value={appModel.homepage}
                onChange={e => setAppModel({ ...appModel, homepage: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="repository">Repository</Label>
              <Input
                id="Repository"
                value={appModel.repository}
                onChange={e =>
                  setAppModel({
                    ...appModel,
                    repository: e.target.value,
                  })
                }
              />
            </div>
            <Button onClick={() => onSubmit()}>Save</Button>
          </form>
        </div>
        <div className="dialog-content-back" ref={dialogContentBackRef}></div>
      </div>
    </div>
  ) : null
}
