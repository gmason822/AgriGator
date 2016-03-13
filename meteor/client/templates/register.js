Template.register.events({
    'submit form': function(event){
        event.preventDefault();
	var nameVar = event.target.registerName.value;
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
	var businessVar = event.target.registerBusiness.value;
	var phoneVar = event.target.phoneNumber.value;
	Account.createUser({
		name: registerName
		email: emailVar,
		password: passwordVar,
		business: businessVar,
		phone: phoneVar
	});
	userData = new Mongo.Collection(Account.name);
    }
});
