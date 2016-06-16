define(['config', 'backbone', 'model/item'], function (config, Backbone, Item) {
    return Backbone.Collection.extend({
        url: config.url + '/.json',
        model: Item
    });
});
