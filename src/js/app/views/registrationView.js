define([
    'jquery',
    'marionette',
    'backbone',
    'firebase',
    'text!templates/registration.html'
], function (
    $,
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
            'submit @ui.form': 'signUp'
        },

        events: {
            'click #close': 'alertClose'
        },

        alertClose: function (e) {
            e.preventDefault();
            $('#registrationAlert').hide();
        }
    });
});
