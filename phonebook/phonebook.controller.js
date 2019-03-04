myApp.controller('phoneBookControllerMain', function($scope, $localStorage) {
    $scope.clearCache = function ()
    {
    	localStorage.clear();
    	location.reload();
    }
});

myApp.controller('phoneBookControllerNewContact', ['phoneBookFactory','$location', '$scope', '$localStorage',  function(phoneBookFactory, $location, $scope, $localStorage) {
    $scope.newContact = {};
    $scope.contacts = phoneBookFactory.getContacts();

    $scope.saveContact = function ()
    {
    	if($scope.newContact.avatar == null)
    	{
    		$scope.newContact.avatar = 'http://www.signup.co.il/wp-content/uploads/2014/08/avatar-2-300x300.png';
    	}
    	$scope.contacts.contacts.push($scope.newContact);

    	phoneBookFactory.saveContact($scope.contacts);

    	$scope.newContact = {};

    	$location.path("/");
    }
}]);


myApp.controller('phoneBookControllerEditContact',['phoneBookFactory','$location', '$scope', '$routeParams', function(phoneBookFactory, $location, $scope, $routeParams, $localStorage, ) {

    $scope.newContact = phoneBookFactory.getContact($routeParams.id);
    $scope.contacts = phoneBookFactory.getContacts();

    $scope.saveContact = function ()
    {
    	if($scope.newContact.avatar == null)
    	{
    		$scope.newContact.avatar = 'http://www.signup.co.il/wp-content/uploads/2014/08/avatar-2-300x300.png';
    	}
    	$scope.contacts.contacts[$routeParams.id].name = $scope.newContact.name;
    	$scope.contacts.contacts[$routeParams.id].phone = $scope.newContact.phone;
    	$scope.contacts.contacts[$routeParams.id].birthday = $scope.newContact.birthday;
    	$scope.contacts.contacts[$routeParams.id].email = $scope.newContact.email;
    	$scope.contacts.contacts[$routeParams.id].avatar = $scope.newContact.avatar;

    	phoneBookFactory.saveContact($scope.contacts);

    	$location.path("/");
    }
    ;
}]);

myApp.controller('phoneBookControllerViewContact',['phoneBookFactory','$scope', '$routeParams',  function(phoneBookFactory, $scope, $routeParams, ) {

    $scope.contactId = $routeParams.id;

    $scope.contact = phoneBookFactory.getContact($routeParams.id);

}]);

myApp.controller('phoneBookControllerList', ['phoneBookFactory','$scope', '$http', '$localStorage', function(phoneBookFactory, $scope, $http, $localStorage)
{
		var contactsList =  localStorage.getItem("contactList");
        if(contactsList != null) {
            contactsList = JSON.parse(localStorage.getItem("contactList"));

            $scope.contacts = contactsList.contacts
         } 
         else {
            $http({
                method: 'GET',
                url: 'database/seed.json'
            }).then(function successCallback(response) {
                 
                localStorage.setItem("contactList", JSON.stringify(response.data)); 
                contactsList = JSON.parse(localStorage.getItem("contactList"));
                
                $scope.contacts = contactsList.contacts;

            }, function errorCallback(response) {
                $scope.message = 'Error data load'
            });
        }

}]);