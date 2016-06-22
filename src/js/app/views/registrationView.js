define([
    'jquery',
    'marionette',
    'backbone',
    'firebase',
    'config',
    'text!templates/registration.html'
], function (
    $,
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
            'submit @ui.form': 'signUp'
        },

        events: {
            'click #close': 'alertClose'
        },

        onSignUp: function() {
            Firebase.auth().createUserWithEmailAndPassword(
                this.ui.user.val(),
                this.ui.password.val()
            ).then(function () {
                Backbone.history.navigate('items', true);
            }).catch(function(error) {
                var alert = $('#registrationAlert');
                alert.find('#alertMessage').text(error.message);
                alert.show();
            });
        },

        alertClose: function (e) {
            e.preventDefault();
            $('#registrationAlert').hide();
        }
    });
});
