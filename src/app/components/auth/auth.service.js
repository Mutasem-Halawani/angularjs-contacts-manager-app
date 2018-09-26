function AuthService ($firebaseAuth) {
  var auth = $firebaseAuth()
  var authData = null

  function storeAuthData (res) {
    authData = res
    return authData
  }

  function onSignIn (user) {
    authData = user
    return auth.$requireSignIn()
  }

  this.register = function (user) {
    return auth
      .$createUserWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData)
  }

  this.login = function (user) {
    return auth
      .$signInWithEmailAndPassword(user.email, user.password)
      .then(this.storeAuthData) // user authentication stored
  }

  this.requireAuthentication = function () {
    return auth
      .$waitForSignIn().then(onSignIn)
  }

  this.isAuthenticated = function () {
    return !!authData
  }

  this.getUser = function () {
    if (authData) {
      return authData
    }
  }
}

angular
  .module('components.auth')
  .service('AuthService', AuthService)
