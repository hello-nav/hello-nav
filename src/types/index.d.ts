interface AppItem {
  url: string
  label: string
  imgSrc: string
  githubUrl?: string
  keyWords?: string[]
}

interface CateItem {
  title: string
  childrens: AppItem[]
}