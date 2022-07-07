/* eslint-disable no-unused-vars */
interface AppItem {
  name: string
  homepage: string
  repository?: string
  icon: string
  keywords?: string[]
  darkInvert?: boolean
}

interface CateItem {
  title: string
  children: AppItem[]
}

type CategoryType = 'list' | 'category'
type CategoryTypes = CategoryType[]

interface LibraryMap {
  list: AppItem[]
  category: CateItem[]
}

interface FiltersMap {
  list(key: string): AppItem[]
  category(key: string): CateItem[]
}

interface FilterProps {
  onInput(e: React.FormEvent): void
  filterKey: string
  toggleType: any
  type: string
}

interface ContainWrapProp {
  list: AppItem[] | CateItem[],
  type: string
}

interface WithErrorProps {
  isError: boolean
  [propName: string]: any
}
