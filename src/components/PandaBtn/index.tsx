import { useState } from 'react'
import './index.css'

interface PandaBtnProps {
  onClick?: (event: React.SyntheticEvent) => void
}

const STATUS_CLASS_NAME = 'theme--dark'

function toggleTheme(isStatusTrue: boolean) {
  const pageClassList = document.documentElement.classList
  if (isStatusTrue) {
    pageClassList.remove(STATUS_CLASS_NAME)
    window.localStorage.__THEME__ = ''
  } else {
    pageClassList.add(STATUS_CLASS_NAME)
    window.localStorage.__THEME__ = STATUS_CLASS_NAME
  }
  const themeMateEle = document.querySelector('meta[name="theme-color"]')
  if (themeMateEle) {
    themeMateEle.setAttribute(
      'content',
      isStatusTrue ? '#f6f7f9' : 'rgba(45, 46, 48, 0.9)',
    )
  }
}

export default function PandaBtn({ onClick }: PandaBtnProps) {
  const [status, setStatus] = useState(!!window.localStorage.__THEME__)
  const classNames = ['panda-btn', status && STATUS_CLASS_NAME].join(' ')

  const handleClick: React.MouseEventHandler = e => {
    toggleTheme(status)
    setStatus(!status)
    if (onClick) {
      ;(onClick as React.MouseEventHandler)(e)
    }
  }

  return (
    <span className={classNames} onClick={handleClick} onKeyDown={() => {}} />
  )
}
