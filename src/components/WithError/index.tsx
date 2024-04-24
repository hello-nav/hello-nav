import './index.less'

function WithError<T>(Component: React.ComponentType<T | any>, Children: any) {
  return ({ isError, filterKey, ...props }: WithErrorProps) =>
    isError ? (
      <div className="err-message">
        <Children filterKey={filterKey}></Children>
      </div>
    ) : (
      <Component {...props} />
    )
}

export default WithError
