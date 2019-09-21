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

type CategoryType = 'list' | 'category'
type CategoryTypes = CategoryType[]

interface FilterProps {
  filterKey: string
  onInput(e: React.FormEvent): void
  toggleType: any
  type: string
}

interface WithErrorProps {
  isError: boolean
  [propName: string]: any
}