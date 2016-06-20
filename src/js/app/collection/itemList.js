define([
    'config',
    'backbone',
    'model/item'
], function (
    config,
    Backbone,
    Item
) {
    return Backbone.Collection.extend({
        model: Item,
        url: function () {
            return config.databaseURL + '/items.json'
        }
    });
});
