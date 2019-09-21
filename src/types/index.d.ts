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

interface LibraryMap {
  list: AppItem[]
  category: CateItem[]
}

interface ListFiltersMap {
  list(key: string): AppItem[]
  category(key: string): CateItem[]
}

interface FilterProps {
  onInput(e: React.FormEvent): void
  filterKey: string
  toggleType: any
  type: string
}

interface WithErrorProps {
  isError: boolean
  [propName: string]: any
}