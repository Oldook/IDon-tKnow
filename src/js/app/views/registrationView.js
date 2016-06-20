define([
    'marionette',
    'backbone',
    'firebaseApp',
    'config',
    'text!templates/registration.html'
], function (
    Marionette,
    Backbone,
    Firebase,
    config,
    registrationTemplate
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
            'submit @ui.form': 'signUp'
        },

        onSignUp: function() {
            console.log('Debug: sign up');
            console.log('Debug username: ' + this.ui.user.val());
            console.log('Debug password: ' + this.ui.password.val());

            Firebase.auth().createUserWithEmailAndPassword(this.ui.user.val(), this.ui.password.val()).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log('Debug registration error code: ' + errorCode);
                console.log('Debug registration error message: ' + errorMessage);
            })
        }
    });
});
