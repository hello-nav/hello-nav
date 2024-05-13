import { useState } from 'react'

interface UseFilterReturn {
  filterKey: string
  setFilterKey: (key: string) => void
}

const useFilter = (): UseFilterReturn => {
  const [filterKey, setFilterKey] = useState('')

  return {
    filterKey,
    setFilterKey,
  }
}

export default useFilter
