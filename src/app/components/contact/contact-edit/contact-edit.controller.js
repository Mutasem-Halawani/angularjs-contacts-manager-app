function ContactEditController ($state, ContactService, cfpLoadingBar, $window) {
  var ctrl = this
  ctrl.updateContact = function (event) {
    cfpLoadingBar.start()
    return ContactService
      .updateContact(event.contact)
      .then(cfpLoadingBar.complete(), cfpLoadingBar.complete())
  }
  ctrl.deleteContact = function (event) {
    var message = 'Delete ' + event.contact.name + ' from contacts?'
    if ($window.confirm(message)) { // We use $window meaning we can inject it and test it in unit testing
      return ContactService
        .deleteContact(event.contact)
        .then(function () {
          $state.go('contact')
        })
    }
  }
}

angular
  .module('components.contact')
  .controller('ContactEditController', ContactEditController)
