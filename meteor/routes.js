Router.route('/', function() {
    this.render('Home', {
	});
});

Router.route('/profile/:user_id', function () {
    console.log(Meteor.users.findOne(this.params.user_id))
    this.render('Profile', {
	data: function ()
	{
	    return {user: Meteor.users.findOne(this.params.user_id)}
	}
    });
});

Router.route('/report', function () {
    this.render('Report', {
    });
});
