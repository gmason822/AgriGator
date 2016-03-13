Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
	var businessVar = event.target.registerBusiness.value;
	var phoneVar = event.target.phoneNumber.value;
	Accout.createUser({
		email: emailVar,
		password: passwordVar,
		business: businessVar,
		phone: phoneVar
	});
    }
});
