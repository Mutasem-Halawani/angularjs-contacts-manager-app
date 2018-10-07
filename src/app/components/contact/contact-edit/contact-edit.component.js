var contactEdit = { // Statefull routed component
  bindings: {
    // because we are using components routing we can specify contact as a binding
    contact: '<'
  },
  templateUrl: './contact-edit.html',
  controller: 'ContactEditController'
}

angular
  .module('components.contact')
  .component('contactEdit', contactEdit)
  .config(function ($stateProvider) {
    $stateProvider
      .state('contact', {
        parent: 'app', // we add it to make sure that this route is protected by firebase authentication
        url: '/contact/:id', // maps to the contact.key
        component: 'contactEdit',
        resolve: { // we need to resolve contact data before we transition to this component
          contact: function ($transition$, ContactService) { //  we transition to this component we will get the value from the url
            var key = $transition$.params().id
            return ContactService.getContactById(key).$loaded() // contact!
          }
        }
      })
  })
