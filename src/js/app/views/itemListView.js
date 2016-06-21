define([
    'marionette',
    'backbone',
    'config',
    'views/itemView'
], function (
    Marionette,
    Backbone,
    config,
    ItemView
) {
    return Marionette.CollectionView.extend({
        childView: ItemView
    });
});
