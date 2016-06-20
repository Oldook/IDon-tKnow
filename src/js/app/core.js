define([
    'config',
    'cookie',
    'marionette',
    'backbone',
    'jquery',
    'router/appRouter',
    'router/userRouter',
    'model/item',
    'collection/itemList',
    'views/itemView',
    'views/registrationView'
], function (
    config,
    Cookies,
    Marionette,
    Backbone,
    $,
    appRouter,
    userRouter,
    Item,
    Items,
    ItemView,
    RegistrationView
) {
    var app = new Marionette.Application({

    });

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
    });

    app.start();
});