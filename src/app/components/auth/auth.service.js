function AuthService ($firebaseAuth) {
  var auth = $firebaseAuth()
  var authData = null

  this.storeAuthData = function storeAuthData (res) {
    authData = res
    return authData
  }
  this.register = function (user) {
    return auth
      .$createUserWithEmailAndPassword(user.email, user.password)
      .then(this.storeAuthData)
  }

  this.login = function (user) {
    return auth
      .$signInWithEmailAndPassword(user.email, user.password)
      .then(this.storeAuthData) // user authentication stored
  }
}

angular
  .module('components.auth')
  .service('AuthService', AuthService)
