import React from 'react'
import PandaBtn from '../PandaBtn'
import './index.css'

const DARK_CLASS_NAME = 'theme--dark'
function toggleTheme() {
  const bodyClassList = document.body.classList
  if (bodyClassList.contains(DARK_CLASS_NAME)) {
    bodyClassList.remove(DARK_CLASS_NAME)
  } else {
    bodyClassList.add(DARK_CLASS_NAME)
  }
}

function FilterBar({
  filterKey, onInput, toggleType, type,
}: FilterProps) {
  return (
    <div className="filter-bar">
      <div className="filter-bar__btn">
        <PandaBtn onClick={toggleTheme} />
        <div className="filter-bar__toggle-btn" onClick={toggleType} onKeyDown={() => {}}>
          <svg className={`icon ${type}-icon`} aria-hidden="true">
            <use href={`#icon-${type}`} />
          </svg>
        </div>
      </div>
      <div className="filter-bar__input-warp">
        <input
          className="search-input"
          type="text"
          value={filterKey}
          onChange={() => {}}
          onInput={onInput}
        />
        <svg className="icon search-icon" aria-hidden="true">
          <use href="#icon-search" />
        </svg>
        <svg className="icon clear-icon" aria-hidden="true">
          <use href="#icon-close" />
        </svg>
      </div>
    </div>
  )
}

export default FilterBar
