Router.route('/', function () {
  this.render('Home');
});
/*
Router.route('/profile/:user_id', function () {
    console.log(Meteor.users.findOne(this.params.user_id))
    this.render('Profile', {
	data: function () 
	{
	    return {user: Meteor.users.findOne(this.params.user_id)}
	}
    });
});
*/

Router.route('/profile', function () {
    this.render('Profile');
});
        
Router.route('/field_data', function () {
    this.render('Field Data');
});

Router.route('/field_search', function () {
    this.render('Field Search');
});
