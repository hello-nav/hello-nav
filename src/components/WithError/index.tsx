import React from 'react'
import './index.css'

interface WithErrorProps {
  isError: boolean
  [propName: string]: any
}

const WithError = (Component: React.FunctionComponent, text: string) => ({isError, ...props}: WithErrorProps) => (
  isError ?
  <p className="err-message">{text}</p> :
  <Component {...props} />
)

export default WithError