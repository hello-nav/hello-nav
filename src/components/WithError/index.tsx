import React from 'react'
import './index.css'

interface WithError {
  <T>(Component: React.ComponentType<T>, text: string):
    (props: WithErrorProps) => JSX.Element
}

function WithError<T>(Component: React.ComponentType<T | any>, text: string) {
  return ({ isError, ...props }: WithErrorProps) => (
    isError
      ? <p className="err-message">{text}</p>
      : <Component {...props} />
  )
}

export default WithError
