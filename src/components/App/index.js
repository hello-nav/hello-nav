import React, { Component } from 'react'
import Library from '../../mock'
import FilterBar from '../FilterBar'
import Contain from '../Contain'
import WithError from '../WithError'

const CATEGORY_TYPES = ['list', 'category']

const ContainWithNotFind = WithError(Contain, 'Ooops! Can not find it here.')

class App extends Component {
  constructor (props) {
    super (props)
    this.libraryMap = {
      category: Library,
      list: Library.reduce((res, item) => (res.push(...item.children), res), [])
    }
    const state = {
      typeValue: window.localStorage.__CATEGORY_TYPE__ || CATEGORY_TYPES[0],
      filterValue: ''
    }
    state.library = this.libraryMap[state.typeValue]
    state.typeIndex = CATEGORY_TYPES.indexOf(state.typeValue)
    this.state = state
  }
  filterLibrary =  e => {
    this.setState({
      filterValue: e.target.value.trim()
    })
  }
  toggleType = () => {
    const typeIndex = (this.state.typeIndex + 1) % 2
    const typeValue = CATEGORY_TYPES[typeIndex]
    this.setState({
      typeIndex,
      typeValue,
      filterValue: '',
      library: this.libraryMap[typeValue]
    })
    window.localStorage.__CATEGORY_TYPE__ = typeValue
  }
  render () {
    let { library: list, filterValue, typeValue } = this.state
    const lowerCaseValue = filterValue.toLowerCase()
    if (lowerCaseValue !== '') {
      if (typeValue === 'list') {
        list = list
          .filter( ({keyWords}) => keyWords
          .some(item => item.toLowerCase().includes(lowerCaseValue)))
      } else {
        list = list
          .filter( ({keyWords}) => keyWords
          .some(item => item.toLowerCase().includes(lowerCaseValue)))
      }
    }
    console.log(list)
    return (
      <div>
        <FilterBar value={filterValue} onInput={this.filterLibrary} type={typeValue} toggleType={this.toggleType}/>
        <ContainWithNotFind list={list} isError={!list.length}/>
      </div>
    )
  }
}

export default App
