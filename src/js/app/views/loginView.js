define([
    'marionette',
    'backbone',
    'firebase',
    'text!templates/login.html'
], function (
    Marionette,
    Backbone,
    Firebase,
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

        showAlert: function (err) {
            var alert = $('#loginAlert');
            alert
                .find('#alertMessage')
                .text(err);
            alert.show();
        }
    });
});
