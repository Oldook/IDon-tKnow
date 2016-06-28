define([
    'marionette',
    'backbone',
    'text!templates/edit.html'
], function (
    Marionette,
    Backbone,
    editTemplate
) {
    return Marionette.LayoutView.extend({
        template: editTemplate,

        ui: {
            title: '#title',
            form: 'form',
            description: '#description'
        },

        triggers: {
            'submit @ui.form': 'edit'
        },

        events: {
            'click .cancel': 'cancel'
        },

        cancel: function(e) {
            e.preventDefault();
            Backbone.history.navigate('items', true);
        },

        showAlert: function (err) {
            var alert = $('#editAlert');
            alert
                .find('#alertMessage')
                .text(err);
            alert.show();
        }
    });
});
