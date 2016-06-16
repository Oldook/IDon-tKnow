define(['marionette', 'backbone', 'config'], function (Marionette, Backbone, config) {
    return Marionette.LayoutView.extend({
        template: '#item',

        events: {
            "click .delete": "logClickDelete"
        },

        logClickDelete: function () {
            console.log('click delete');
        }
    });
});
