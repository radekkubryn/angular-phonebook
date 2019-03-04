myApp.factory("phoneBookFactory", function($http, $localStorage){
 
    var factory = {};


    factory.saveContact = function(contactData)
    {
        localStorage.setItem('contactList', JSON.stringify(contactData));
    }
 

    factory.getContact = function(id)
    {
        var contactList = JSON.parse(localStorage.getItem("contactList"));
        var contact = contactList.contacts;
        $contact = contact[id];
        
        return $contact;
    }

    factory.getContacts = function()
    {
        var contactsList = JSON.parse(localStorage.getItem("contactList"));

        return contactsList;
    }

    return factory;
});