var myApp = angular.module('app',['ngRoute', 'ngStorage']);

myApp.config(function ($routeProvider) {
   $routeProvider

     .when('/', {
       templateUrl: 'views/listContact.html',
       controller: 'phoneBookControllerList'
     })

     .when('/contacts', {
       templateUrl: 'views/listContact',
       controller: 'phoneBookControllerList'
     })

     .when('/new', {
       templateUrl: 'views/newContact.html',
       controller: 'phoneBookControllerNewContact'
     })

     .when('/:id/edit', {
       templateUrl: 'views/editContact.html',
       controller: 'phoneBookControllerEditContact',
     })
     .when('/:id/view', {
       templateUrl: 'views/viewContact.html',
       controller: 'phoneBookControllerViewContact',
     })

     .otherwise({
       redirectTo: '/'
     });
 });