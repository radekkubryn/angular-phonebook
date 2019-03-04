myApp.directive('back', ['$window', function($window) {
	return {
	    restrict: 'A',
	    link: function (scope, elem, attrs) {
	        elem.bind('click', function () {
	            $window.history.back();
	        });
	    }
	};
}]);

myApp.directive('suchHref', ['$location', function ($location) {
  return{
    restrict: 'A',
    link: function (scope, element, attr) {
      element.attr('style', 'cursor:pointer');
      element.on('click', function(){
        $location.url(attr.suchHref)
        scope.$apply();
      });
    }
  }
}]);