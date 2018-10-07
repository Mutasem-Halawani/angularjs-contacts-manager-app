function contactsFilter () {
<<<<<<< HEAD
  return function (collection, params) {
    return collection.filter(function (item) {
      return item.tag === (
        params.filter === 'none' ? item.tag : params.filter
      )
    })
  }
}

angular
  .module('components.contact')
  .filter('contactsFilter', contactsFilter)
=======
	return function (collection, params) {
		return collection.filter(function (item) {
			return item.tag === (
					params.filter === 'none' ? item.tag : params.filter
				)
		})
	}
}

angular
	.module('components.contact')
	.filter('contactsFilter', contactsFilter)
>>>>>>> bb61f591b2de833ebcbbf111bfb7bced3a565aa8
