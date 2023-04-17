// import './index.css'

function WithError<T>(Component: React.ComponentType<T | any>, text: string) {
  // eslint-disable-next-line react/display-name
  return ({ isError, ...props }: WithErrorProps) =>
    isError ? <p className="err-message">{text}</p> : <Component {...props} />
}

export default WithError
