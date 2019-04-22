import React, { Component } from 'react'
import Library from '../../mock'
import FilterBar from '../FilterBar'
import ContainWrap from '../Contain'
import WithError from '../WithError'
import Footer from '../Footer'

const CATEGORY_TYPES = ['list', 'category']

const ContainWithNotFind = WithError(ContainWrap, 'Ooops! Can not find it here.')
const filterKeyWords = filterValue => ({keyWords}) => keyWords.some(item => item.toLowerCase().includes(filterValue))

class App extends Component {
  constructor (props) {
    super (props)
    this.libraryMap = {
      category: Library,
      list: Library.reduce((res, item) => {
        res.push(...item.children)
        return res
      }, [])
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
      filterValue: e.target.value.trim().toLowerCase()
    })
  }
  toggleType = () => {
    const typeIndex = (this.state.typeIndex + 1) % 2
    const typeValue = CATEGORY_TYPES[typeIndex]
    this.setState({
      typeIndex,
      typeValue,
      // filterValue: '',
      library: this.libraryMap[typeValue]
    })
    window.localStorage.__CATEGORY_TYPE__ = typeValue
  }
  render () {
    let { library: list, filterValue, typeValue } = this.state
    if (filterValue !== '') {
      if (typeValue === 'list') {
        list = list.filter(filterKeyWords(filterValue))
      } else {
        list = list.map(({title = '/', children = []}) => ({
          children: children.filter(filterKeyWords(filterValue)),
          title
        })).filter(item => item.children.length)
      }
    }
    // console.log(list)
    // console.log(filterValue)
    return (
      <div>
        <FilterBar value={filterValue}
          onInput={this.filterLibrary}
          type={typeValue}
          toggleType={this.toggleType}
        />
        <ContainWithNotFind value={filterValue}
          type={typeValue}
          list={list}
          isError={!list.length}
        />
        <Footer/>
      </div>
    )
  }
}

export default App
