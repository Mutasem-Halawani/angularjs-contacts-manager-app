var authForm = {
  // We add bindings because this component is stateless
  // and it accepts data and passes out data through the bindings
  bindings: {
    user: '<', // one way data flow
    button: '@', // interpolated string
    message: '@', // hard-coded string
    onSubmit: '&' // ampersand denotes that it is a callback
  },
  templateUrl: './auth-form.html',
  controller: 'AuthFormController'
}

angular
  .module('components.auth')
  .component('authForm', authForm)
