import PandaBtn from '../PandaBtn'
import './index.css'

function ActionBar({ filterKey, onInput, toggleType, type }: FilterProps) {
  return (
    <div className="filter-bar">
      <span className="filter-bar__btn">
        <PandaBtn />
        <span
          className="filter-bar__toggle-btn"
          onClick={toggleType}
          onKeyDown={() => {}}
        >
          <svg className={`icon ${type}-icon`} aria-hidden="true">
            <use href={`#icon-${type}`} />
          </svg>
        </span>
      </span>
      <span className="filter-bar__input-warp">
        <input
          aria-label="filterIpt"
          className="search-input"
          type="text"
          value={filterKey}
          onChange={() => {}}
          onInput={onInput}
        />
        <div className="input-icon-wrap">
          <svg className="icon search-icon" aria-hidden="true">
            <use href="#icon-search" />
          </svg>
          <svg className="icon clear-icon" aria-hidden="true">
            <use href="#icon-close" />
          </svg>
        </div>
      </span>
    </div>
  )
}

export default ActionBar
