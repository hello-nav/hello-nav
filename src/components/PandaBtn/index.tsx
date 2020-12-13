import React, { useState } from 'react'
import './index.css'

interface PandaBtnProps {
  onClick?: (event: React.SyntheticEvent) => void;
}

const STATUS_CLASS_NAME = 'theme--dark'

function toggleBodyClassName(isStatusTrue: boolean) {
  const pageClassList = document.documentElement.classList
  if (isStatusTrue) {
    pageClassList.remove(STATUS_CLASS_NAME)
    window.localStorage.__THEME__ = ''
  } else {
    pageClassList.add(STATUS_CLASS_NAME)
    window.localStorage.__THEME__ = STATUS_CLASS_NAME
  }
}

export default function PandaBtn({ onClick }: PandaBtnProps) {
  const [status, setStatus] = useState(!!window.localStorage.__THEME__)
  const classNames = [
    'panda-btn',
    status && STATUS_CLASS_NAME,
  ].join(' ')

  const handleClick: React.MouseEventHandler = e => {
    toggleBodyClassName(status)
    setStatus(!status)
    if (onClick) {
      (onClick as React.MouseEventHandler)(e)
    }
  }

  return (
    <span
      className={classNames}
      onClick={handleClick}
      onKeyDown={() => {}}
    />
  )
}
