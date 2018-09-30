var appNav = {
  bindings: {
    user: '<',
    onLogout: '&' // uses a callback
  },
  templateUrl: './app-nav.html'
}

angular
  .module('common')
  .component('appNav', appNav)
