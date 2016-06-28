define([
    'marionette',
    'backbone',
    'text!templates/create.html'
], function (
    Marionette,
    Backbone,
    createTemplate
) {
    return Marionette.LayoutView.extend({
        template: createTemplate,

        ui: {
            title: '#title',
            form: 'form',
            description: '#description'
        },

        triggers: {
            'submit @ui.form': 'create'
        },

        events: {
            'click .cancel': 'cancel'
        },

        cancel: function(e) {
            e.preventDefault();
            Backbone.history.navigate('items', true);
        },

        showAlert: function (err) {
            var alert = $('#createAlert');
            alert
                .find('#alertMessage')
                .text(err);
            alert.show();
        }
    });
});
