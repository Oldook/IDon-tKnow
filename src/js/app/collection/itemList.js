define([
    'config',
    'backbone',
    'underscore',
    'model/item'
], function (
    config,
    Backbone,
    _,
    Item
) {
    return Backbone.Collection.extend({
        model: Item,
        url: function () {
            return config.databaseURL + '/items.json';
        },
        parse: function (response) {
            return _.without(response, null);
        },
        getLastId: function () {
            var maxID = _.max(this.models, function (model) {
                return model.id;
            });

            return maxID.id;
        }
    });
});
