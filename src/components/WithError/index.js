import React from 'react'
import './index.css'

const WithError = (Component, text) => ({isError, ...props}) => (
  isError ?
  <p className="err-message">{text}</p> :
  <Component {...props} />
)

export default WithError