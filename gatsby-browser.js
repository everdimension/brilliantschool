/* global ga */
exports.onRouteUpdate = (state) => {
  if (typeof ga !== 'undefined') {
    ga('send', 'pageview', {
      page: state.pathname,
    })
  }
}
