import { ReactSVG } from 'react-svg'
import gitHubIcon from '../../assets/images/github.svg'

const Message = ({ filterKey }: { filterKey: string }) => (
  <>
    Oops! Couldn't find it here...
    <div className="error-tips">
      Try searching on{' '}
      <a href={`https://github.com/search?q=${filterKey}`} target="_blank">
        <ReactSVG className="icon" width={18} height={18} src={gitHubIcon}></ReactSVG> GitHub
      </a>{' '}
      or{' '}
      <a
        href="https://github.com/hello-nav/hello-nav/issues/new?assignees=Heroor&labels=request&projects=&template=request-app.md&title=Request+%28app-name%29"
        target="_blank"
      >
        Request App
      </a>
      .
    </div>
  </>
)

export default Message
