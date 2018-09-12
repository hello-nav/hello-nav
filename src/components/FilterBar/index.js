import React, { Component } from 'react'
import './index.css'

class FilterBar extends Component {
  constructor (props) {
    super(props)
  }

  click () {
    console.log(123)
  }

  render () {
    const {filterValue, onInput} = this.props
    return (
      <div className="filter-bar">
        <div className="filter-bar__toggle-btn">
          <svg className="icon list-icon" aria-hidden="true">
            <use href="#icon-list"></use>
          </svg>
          <svg className="icon category-icon" aria-hidden="true">
            <use href="#icon-category"></use>
          </svg>
        </div>
        <div className="filter-bar__input-warp">
          <input red="input" className="search-input" type="text" value={filterValue} onInput={onInput} />
          <svg className="icon search-icon" aria-hidden="true">
            <use href="#icon-search"></use>
          </svg>
          <svg className="icon clear-icon" aria-hidden="true">
            <use href="#icon-clear11"></use>
          </svg>
        </div>
      </div>
    )
  }
}

export default FilterBar