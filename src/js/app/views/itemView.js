define([
    'jquery',
    'marionette',
    'backbone',
    'text!templates/item.html'
], function (
    $,
    Marionette,
    Backbone,
    itemTemplate
) {
    return Marionette.LayoutView.extend({
        serializeData: function () {
            var data = this.model.toJSON();

            data.user = this.options.user;
            data.ifUserLiked = this.model.ifUserLiked(this.options.user);

            return data;
        },

        template: itemTemplate,

        events: {
            "click .delete": "clickDelete",
            "click .like": 'clickLike',
            "click .edit": 'clickEdit'
        },

        clickDelete: function (e) {
            e.preventDefault();
            Backbone.history.navigate('items/' + $(e.currentTarget).data('id') + '/delete', true);
        },

        clickLike: function (e) {
            e.preventDefault();
            Backbone.history.navigate('items/' + $(e.currentTarget).data('id') + '/like', true);
        },

        clickEdit: function (e) {
            e.preventDefault();
            Backbone.history.navigate('items/' + $(e.currentTarget).data('id') + '/edit', true);
        }
    });
});
