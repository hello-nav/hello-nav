import React, { useState } from 'react'
import './index.css'

interface PandaBtnProps {
  onClick?: (event: React.SyntheticEvent) => void;
}

const DARK_CLASS_NAME = 'theme--dark'

function toggleBodyClassName(isDark: boolean) {
  const bodyClassList = document.body.classList
  if (isDark) {
    bodyClassList.remove(DARK_CLASS_NAME)
    window.localStorage.__THEME__ = ''
  } else {
    bodyClassList.add(DARK_CLASS_NAME)
    window.localStorage.__THEME__ = DARK_CLASS_NAME
  }
}

export default function PandaBtn({ onClick }: PandaBtnProps) {
  const [status, setStatus] = useState(!!window.localStorage.__THEME__)
  const classNames = [
    'panda-btn',
    status && DARK_CLASS_NAME,
  ].join(' ')

  const handleClick: React.MouseEventHandler = e => {
    toggleBodyClassName(status)
    setStatus(!status)
    if (onClick) {
      (onClick as React.MouseEventHandler)(e)
    }
  }

  return (
    <div
      className={classNames}
      onClick={handleClick}
      onKeyDown={() => {}}
    />
  )
}
