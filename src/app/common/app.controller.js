function AppController (AuthService, $state) {
  var ctrl = this
  ctrl.user = AuthService.getUser()

  ctrl.logout = function () {
    console.log(ctrl.user)
    // logout AuthService
    AuthService.logout().then(function () {
      $state.go('auth.login')
    })
  }
}

angular
  .module('common')
  .controller('AppController', AppController)
