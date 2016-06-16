define(['config', 'marionette', 'backbone', 'jquery', 'router/appRouter', 'model/item', 'collection/itemList', 'views/itemView'], function (config, Marionette, Backbone, $, appRouter, Item, Items, ItemView) {
    var app = new Marionette.Application();

    var AppLayoutView = ItemView;

    app.on('before:start', function () {
        var RegionContainer = Marionette.LayoutView.extend({
            el: 'body',

            regions: {
                item: '#items'
            }
        });

        app.regions = new RegionContainer();
    });

    app.on('start', function () {
        console.log('Debug: app start');

        Backbone.history.start();

        var layoutView = new AppLayoutView({
            model: new Item()
        });

        app.regions.item.show(layoutView);
    });

    app.start();
});