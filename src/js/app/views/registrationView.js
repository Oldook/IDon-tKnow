define([
    'marionette',
    'backbone',
    'config',
    'text!templates/registration.html'
], function (
    Marionette,
    Backbone,
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
            'submit @ui.form': 'add:todo:item'
        },

        onAddTodoItem: function() {
            console.log('submit');
        },

        logClickDelete: function () {
            console.log('click delete');
        }
    });
});
