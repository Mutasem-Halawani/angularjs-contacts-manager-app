angular
  .module('components.auth', [
    'ui.router',
    'firebase',
    'myApp.config'
  ]).run(function(config) {
    console.log(config)
  })
