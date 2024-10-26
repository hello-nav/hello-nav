declare global {
  interface AppItem {
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

  interface FilterProps {
    onInput(e: React.FormEvent): void
    onClear(): void
    filterKey: string
    toggleType: any
    toggleSetting: any
    type: string
  }

  interface ContainWrapProp {
    list: AppItem[] | CateItem[]
    type: string
  }

  interface WithErrorProps {
    isError: boolean
    [propName: string]: any
  }
}

export {}
