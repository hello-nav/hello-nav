import React, { useState } from 'react'
import './index.css'

interface PandaBtnProps {
  onClick?: (event: React.SyntheticEvent) => void;
}

export default function PandaBtn({ onClick }: PandaBtnProps) {
  const [status, setStatus] = useState(false)
  const classNames = [
    'panda-btn',
    status && 'theme--dark',
  ].join(' ')

  const handleClick: React.MouseEventHandler = e => {
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
