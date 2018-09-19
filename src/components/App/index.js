import React, { Component } from 'react'
import Library from '../../mock'
import FilterBar from '../FilterBar'
import Contain from '../Contain'
import WithError from '../WithError'

const categoryTypes = ['list', 'category']

const ContainWithNotFind = WithError(Contain, 'Ooops! Can not find it here.')

class App extends Component {
  constructor (props) {
    super (props)
    const CATEGORY_TYPE = window.localStorage.CATEGORY_TYPE
    const state = {
      toggleTypeValue: CATEGORY_TYPE || categoryTypes[0],
      filterValue: '',
      library: Library
    }
    if (CATEGORY_TYPE === 'list') {
      state.library = Library.reduce((res, item) => (res.push(...item.children), res), [])
    }
    state.toggleTypeIndex = categoryTypes.indexOf(state.toggleTypeValue)
    this.state = state
  }
  filterLibrary =  e => {
    this.setState({
      filterValue: e.target.value.trim()
    })
  }
  toggleType = () => {
    const state = {}
    const toggleTypeIndex = (this.state.toggleTypeIndex + 1) % 2
    const toggleTypeValue = categoryTypes[toggleTypeIndex]
    if (toggleTypeValue === 'list') {
      library = Library.reduce((res, item) => (res.push(...item.children), res), [])
    }
    this.setState({
      toggleTypeIndex,
      toggleTypeValue,
      filterValue: ''
    }))
    window.localStorage.CATEGORY_TYPE = toggleTypeValue
  }
  render () {
    const { library, filterValue, toggleTypeValue } = this.state
    const lowerCaseValue = filterValue.toLowerCase()
    console.log(toggleTypeValue)
    console.log(library)

    let list = library
    if (toggleTypeValue === 'list') {
      list = list.reduce((res, item) => (res.push(...item.children), res), [])
      if (lowerCaseValue === '') {
        list = list
          .filter( ({keyWords}) => keyWords
          .some(item => item.toLowerCase().includes(lowerCaseValue)))
      }
    } else {
      if (lowerCaseValue === '') {
        list = list
          .filter( ({keyWords}) => keyWords
          .some(item => item.toLowerCase().includes(lowerCaseValue)))
      }
    }
    console.log(list)
    return (
      <div>
        <FilterBar value={filterValue} onInput={this.filterLibrary} type={toggleTypeValue} toggleType={this.toggleType}/>
        <ContainWithNotFind list={list} isError={!list.length}/>
      </div>
    )
  }
}

export default App
