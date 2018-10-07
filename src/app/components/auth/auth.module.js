angular
  .module('components.auth', [
    'ui.router',
    'firebase',
    'myApp.config'
  ]).config(function ($firebaseRefProvider, config) {
    var config = {
      apiKey: config.apiKey,
      authDomain: config.authDomain,
      databaseURL: config.databaseURL,
      projectId: config.projectId,
      storageBucket: config.storageBucket,
      messagingSenderId: config.messagingSenderIdS
    }
    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        contacts: config.databaseURL + '/contacts'
      })
    firebase.initializeApp(config)
  })
  .run(function ($transitions, $state, AuthService) {
    $transitions.onStart({
      to: function (state) {
        return !!(state.data && state.data.requiredAuth)
      }
    }, function () {
      return AuthService
        .requireAuthentication()
        .catch(function () {
          return $state.target('auth.login')
        })
    })
    $transitions.onStart({ // Redirect users to app if they logged in and try to go to auth and login
      to: 'auth.*'
    }, function () {
      if (AuthService.isAuthenticated()) {
        return $state.target('app')
      }
    })
  })
