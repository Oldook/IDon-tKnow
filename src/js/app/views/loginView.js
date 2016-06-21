define([
    'marionette',
    'backbone',
    'firebase',
    'config',
    'text!templates/login.html',
    'vent'
], function (
    Marionette,
    Backbone,
    Firebase,
    config,
    registrationTemplate,
    vent
) {
    return Marionette.LayoutView.extend({
        template: registrationTemplate,

        regions: {
            content: "#items"
        },

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
            ).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);
            }).then(function () {
                Backbone.history.navigate('home', true);
            });
        },

        logClickDelete: function () {
            console.log('click delete');
        }
    });
});
