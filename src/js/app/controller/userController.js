define([
    'jquery',
    'marionette',
    'backbone',
    'firebase',
    'router/appRouter',
    'views/registrationView',
    'views/loginView',
    'text!layouts/appLayout.html'
], function (
    $,
    Marionette,
    Backbone,
    Firebase,
    appRouter,
    registrationView,
    loginView,
    appLayout
) {
    console.log('Debug: user controller');

    var AppLayoutView = Marionette.LayoutView.extend({
        el: '#content',
        template: appLayout,

        regions: {
            items: '#items'
        }
    });

    var ItemController = Marionette.Controller.extend({
        registration: function () {
            console.log('Debug: registration');

            var layout = new AppLayoutView();
            layout.render();
            layout.items.show(new registrationView());
        },
        login: function () {
            console.log('Debug: login');

            var layout = new AppLayoutView();
            layout.render();
            layout.items.show(new loginView());
        },
        logout: function () {
            Firebase.auth().signOut().then(function() {
                Backbone.history.navigate('home', true);
            }, function(error) {
                console.log('Debug: sign out error');
                console.log('Debug registration error code: ' + error.code);
                console.log('Debug registration error message: ' + error.message);
            });
        }
    });

    return new ItemController();
});
