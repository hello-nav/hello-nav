import React from 'react'
import { ReactSVG } from 'react-svg'
import PandaBtn from '../PandaBtn'
import iconList from '../../images/icon-list.svg'
import iconCategory from '../../images/icon-category.svg'
import iconSetting from '../../images/icon-setting.svg'
import iconSettingActive from '../../images/icon-setting-active.svg'
import iconSearch from '../../images/icon-search.svg'
import iconClear from '../../images/icon-clear.svg'
import './index.less'

function ActionBar({
  filterKey,
  type,
  toggleType,
  toggleSetting,
  onInput,
  onClear,
  isSettingMode,
}: FilterProps & { isSettingMode: boolean }) {
  return (
    <div className="filter-bar">
      <span className="filter-bar__btn">
        <PandaBtn />
        <span className="filter-bar__toggle-btn" onClick={toggleType} onKeyDown={() => {}}>
          <ReactSVG className="icon" src={type === 'list' ? iconList : iconCategory}></ReactSVG>
        </span>
        <span className="filter-bar__toggle-btn" onClick={toggleSetting} onKeyDown={() => {}}>
          <ReactSVG
            className="icon setting-icon"
            src={isSettingMode ? iconSettingActive : iconSetting}
          ></ReactSVG>
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
          <ReactSVG className="icon search-icon" src={iconSearch}></ReactSVG>
          <ReactSVG className="icon clear-icon" src={iconClear} onClick={onClear}></ReactSVG>
        </div>
      </span>
    </div>
  )
}

export default ActionBar
