define([
    'jquery',
    'marionette',
    'backbone',
    'firebase',
    'router/appRouter',
    'views/registrationView',
    'views/loginView',
    'views/layoutView'
], function (
    $,
    Marionette,
    Backbone,
    Firebase,
    appRouter,
    registrationView,
    loginView,
    AppLayoutView
) {
    var UserController = Marionette.Controller.extend({
        initialize: function () {
            this.layout = new AppLayoutView()
        },
        registration: function () {
            this.layout.render();
            this.layout.items.show(new registrationView());
        },
        login: function () {
            this.layout.render();
            this.layout.items.show(new loginView());
        },
        logout: function () {
            Firebase.auth().signOut().then(function() {
                Backbone.history.navigate('home', true);
            }, function (error) {
                console.log('Debug: sign out error');
                console.log('Debug registration error code: ' + error.code);
                console.log('Debug registration error message: ' + error.message);
            });
        }
    });

    return new UserController();
});
