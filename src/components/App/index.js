import React, { Component } from 'react'
import library from '../../mock'
import FilterBar from '../FilterBar'
import Contain from '../Contain'
import WithError from '../WithError'

const ContainWithNotFind = WithError(Contain, 'Ooops! Can not find it here.')

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      library,
      filterValue: ''
    }
  }
  filterLibrary (e) {
    this.setState({
      filterValue: e.target.value.trim()
    })
  }
  render () {
    const { library, filterValue } = this.state
    const lowerCaseValue = filterValue.toLowerCase()
    const list = lowerCaseValue === '' ?
      library :
      library.filter( ({keyWords}) => keyWords.some(item => item.toLowerCase().includes(lowerCaseValue)))
    return (
      <div>
        <FilterBar value={filterValue} onInput={this.filterLibrary.bind(this)}/>
        <ContainWithNotFind list={list} isError={!list.length}/>
      </div>
    )
  }
}

export default App
