if (document.documentElement) {
  var themeClassName = (window.localStorage && window.localStorage.__THEME__) || 'none'
  document.documentElement.className = themeClassName
  if (themeClassName === 'theme--dark') {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', 'rgba(45, 46, 48, 0.9)')
  }
}
