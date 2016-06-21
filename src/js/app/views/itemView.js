define([
    'jquery',
    'marionette',
    'backbone',
    'config',
    'text!templates/item.html'
], function (
    $,
    Marionette,
    Backbone,
    config,
    itemTemplate
) {
    return Marionette.LayoutView.extend({
        template: itemTemplate,

        events: {
            "click .delete": "clickDelete",
            "click .like": 'clickLike'
        },

        clickDelete: function (e) {
            e.preventDefault();
            Backbone.history.navigate('items/' + $(e.currentTarget).data('id') + '/delete', true);
        },

        clickLike: function (e) {
            e.preventDefault();
            console.log($(e.currentTarget).data('id'));
            console.log('click like');
        }
    });
});
