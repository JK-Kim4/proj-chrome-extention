window.addEventListener('DOMContentLoaded', () => {
  const isNaverMainPage =
    window.location.hostname === 'www.naver.com' &&
    window.location.pathname === '/'
  if (isNaverPage) {
    messageToBackground('VISIT_NAVER', {})
  }
})
