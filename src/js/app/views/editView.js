define([
    'marionette',
    'backbone',
    'firebase',
    'config',
    'text!templates/edit.html'
], function (
    Marionette,
    Backbone,
    Firebase,
    config,
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

        onEdit: function() {
            console.log('on edit');
        },

        cancel: function(e) {
            e.preventDefault();
            
            Backbone.history.navigate('items', true);
        }
    });
});
