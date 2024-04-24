import './index.less'

function WithError<T>(Component: React.ComponentType<T | any>, Children: any) {
  return ({ isError, filterKey, resultAppCount, ...props }: WithErrorProps) =>
    isError ? (
      <div className="err-message">
        <Children filterKey={filterKey}></Children>
      </div>
    ) : (
      <>
        <Component {...props} />
        {filterKey && <div className="result-tips">Total {resultAppCount} found</div>}
      </>
    )
}

export default WithError
