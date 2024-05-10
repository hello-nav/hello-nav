import models from '../model'

function getModules(): CateItem[] {
  return models.map(({ title, data: children }: any) => {
    return { title, children }
  })
}

export { getModules }
