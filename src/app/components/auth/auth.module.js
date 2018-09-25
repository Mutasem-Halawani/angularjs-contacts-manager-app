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
