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
        }
    });
});
