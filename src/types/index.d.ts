/* eslint-disable no-unused-vars */
declare interface AppItem {
  name: string
  homepage: string
  repository?: string
  icon: string
  keywords?: string[]
  darkInvert?: true
  lessRadius?: true
  favorite?: boolean
  hidden?: boolean
  first?: boolean
  final?: boolean
}

declare interface CateItem {
  title: string
  children: AppItem[]
}

declare type CategoryType = 'list' | 'category'
declare type CategoryTypes = CategoryType[]

declare interface LibraryMap {
  list: AppItem[]
  category: CateItem[]
}

declare interface FilterProps {
  onInput(e: React.FormEvent): void
  onClear(): void
  filterKey: string
  toggleType: any
  toggleSetting: any
  type: string
}

declare interface ContainWrapProp {
  list: AppItem[] | CateItem[]
  type: string
}

declare interface WithErrorProps {
  isError: boolean
  [propName: string]: any
}
