define([
    'marionette',
    'backbone',
    'firebase',
    'views/registrationView',
    'views/loginView',
    'views/layoutView',
    'views/messageView'
], function (
    Marionette,
    Backbone,
    Firebase,
    RegistrationView,
    LoginView,
    AppLayoutView,
    MessageView
) {
    var UserController = Marionette.Controller.extend({
        initialize: function () {
            this.layout = new AppLayoutView();
        },

        showMessage: function (message) {
            this.layout.content.show(
                new MessageView({
                    message: message
                })
            );
        },

        registration: function () {
            this.layout.render();
            
            if (!Firebase.auth().currentUser) {
                var view = new RegistrationView();
                view.on('signUp', function (e) {
                    Firebase.auth().createUserWithEmailAndPassword(
                        e.view.ui.user.val(),
                        e.view.ui.password.val()
                    ).then(function () {
                        Backbone.history.navigate('items', true);
                    }).catch(function(error) {
                        view.showAlert(error.message);
                    });
                });

                this.layout.content.show(view);
            } else {
                this.showMessage('You have already logged in');
            }
        },

        login: function () {
            this.layout.render();

            if (!Firebase.auth().currentUser) {
                var view = new LoginView();
                view.on('login', function (e) {
                    Firebase.auth().signInWithEmailAndPassword(
                        e.view.ui.user.val(),
                        e.view.ui.password.val()
                    ).then(function () {
                        Backbone.history.navigate('items', true);
                    }).catch(function (error) {
                        view.showAlert(error.message);
                    });
                });

                this.layout.content.show(view);
            } else {
                this.showMessage('You have already logged in');
            }
        },

        logout: function () {
            if (Firebase.auth().currentUser) {
                Firebase.auth().signOut().then(function() {
                    Backbone.history.navigate('login', true);
                });
            } else {
                this.showMessage('You need to login');
            }
        }
    });

    return new UserController();
});
