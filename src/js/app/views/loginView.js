define([
    'marionette',
    'backbone',
    'firebase',
    'config',
    'text!templates/login.html'
], function (
    Marionette,
    Backbone,
    Firebase,
    config,
    registrationTemplate
) {
    return Marionette.LayoutView.extend({
        template: registrationTemplate,

        ui: {
            user: '#user',
            form: 'form',
            password: '#password'
        },

        triggers: {
            'submit @ui.form': 'login'
        },

        onLogin: function() {
            Firebase.auth().signInWithEmailAndPassword(
                this.ui.user.val(),
                this.ui.password.val()
            ).then(function () {
                Backbone.history.navigate('items', true);
            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);
            });
        }
    });
});
