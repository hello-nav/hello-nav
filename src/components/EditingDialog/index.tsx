import { useContext } from 'react'
import { AppsContext } from '@/hooks'
import { cn } from '@/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from '@/components/ui/drawer'
import { Label } from '@/components/ui/label'

export default () => {
  const { open, setOpen, appModel, setAppModel } = useContext(AppsContext).editing

  function onSubmit() {
    console.log(appModel)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit App</DialogTitle>
        </DialogHeader>
        <form className={cn('grid items-start gap-4')} onSubmit={e => e.preventDefault()}>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={appModel.name}
              onChange={e =>
                setAppModel({
                  ...appModel,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="homepage">Homepage</Label>
            <Input
              id="Homepage"
              value={appModel.homepage}
              onChange={e =>
                setAppModel({
                  ...appModel,
                  homepage: e.target.value,
                })
              }
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
      </DialogContent>
    </Dialog>
  )
}
