import React from 'react'
import './index.css'

const WithError = (
  Component: React.FunctionComponent,
  text: string,
) => ({ isError, ...props }: WithErrorProps) => (
  isError
    ? <p className="err-message">{text}</p>
    : <Component {...props} />
)

export default WithError
