define([
    'marionette',
    'backbone',
    'firebase',
    'views/registrationView',
    'views/loginView',
    'views/layoutView'
], function (
    Marionette,
    Backbone,
    Firebase,
    RegistrationView,
    LoginView,
    AppLayoutView
) {
    var UserController = Marionette.Controller.extend({
        initialize: function () {
            this.layout = new AppLayoutView();
        },

        registration: function () {
            if (!Firebase.auth().currentUser) {
                var view = new RegistrationView();
                view.on('signUp', function (e) {
                    Firebase.auth().createUserWithEmailAndPassword(
                        e.view.ui.user.val(),
                        e.view.ui.password.val()
                    ).then(function () {
                        Backbone.history.navigate('items', true);
                    }).catch(function(error) {
                        var alert = $('#registrationAlert');
                        alert.find('#alertMessage').text(error.message);
                        alert.show();
                    });
                });

                this.layout.render();
                this.layout.items.show(view);
            } else {
                Backbone.history.navigate('items', true);
            }
        },

        login: function () {
            if (!Firebase.auth().currentUser) {
                var view = new LoginView();
                view.on('login', function (e) {
                    Firebase.auth().signInWithEmailAndPassword(
                        e.view.ui.user.val(),
                        e.view.ui.password.val()
                    ).then(function () {
                        Backbone.history.navigate('items', true);
                    }).catch(function (error) {
                        var errorCode = error.code;
                        var errorMessage = error.message;

                        console.log(errorCode);
                        console.log(errorMessage);
                    });
                });

                this.layout.render();
                this.layout.items.show(view);
            } else {
                Backbone.history.navigate('items', true);
            }
        },

        logout: function () {
            if (Firebase.auth().currentUser) {
                Firebase.auth().signOut().then(function() {
                    Backbone.history.navigate('login', true);
                });
            } else {
                Backbone.history.navigate('items', true);
            }
        }
    });

    return new UserController();
});
