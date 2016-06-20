define([
    'marionette',
    'backbone',
    'config',
    'text!templates/item.html'
], function (
    Marionette,
    Backbone,
    config,
    itemTemplate
) {
    return Marionette.LayoutView.extend({
        template: itemTemplate,

        events: {
            "click .delete": "logClickDelete"
        },

        logClickDelete: function () {
            console.log('click delete');
        }
    });
});
