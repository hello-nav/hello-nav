import React from 'react'
import { ReactSVG } from 'react-svg'
import gitHubIcon from '../../images/github.svg'
import reportIcon from '../../images/icon-report.svg'

const Message = ({ filterKey }: { filterKey: string }) => (
  <>
    Oops! Couldn't find it here...
    <div className="error-tips">
      Try searching on{' '}
      <a href={`https://github.com/search?q=${encodeURIComponent(filterKey)}`} target="_blank">
        <ReactSVG className="icon" width={18} height={18} src={gitHubIcon}></ReactSVG> GitHub
      </a>{' '}
      or{' '}
      <a
        href={`https://github.com/hello-nav/hello-nav/issues/new?assignees=Heroor&labels=request&projects=&template=request-app.md&title=Request ${encodeURIComponent(
          filterKey,
        )}`}
        target="_blank"
      >
        <ReactSVG className="icon" width={18} height={18} src={reportIcon}></ReactSVG>
        Request App
      </a>
      .
    </div>
  </>
)

export default Message
