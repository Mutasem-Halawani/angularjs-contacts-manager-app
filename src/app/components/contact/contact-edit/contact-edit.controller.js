<<<<<<< HEAD
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
=======
function ContactEditController($state, ContactService, cfpLoadingBar, $window) {
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
>>>>>>> bb61f591b2de833ebcbbf111bfb7bced3a565aa8
