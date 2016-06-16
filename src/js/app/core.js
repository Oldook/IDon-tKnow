define(['config', 'cookie', 'marionette', 'backbone', 'jquery', 'router/appRouter', 'model/item', 'collection/itemList', 'views/itemView'], function (config, Cookies, Marionette, Backbone, $, appRouter, Item, Items, ItemView) {
    var SessionModel = Backbone.Model.extend({
        initialize: function () {
            console.log('Debug: initialize');

            this.listenTo(this, 'change', function (model) {
                console.log('Debug: set cookie');
                // Manage cookies storage
                // ex. using js.cookie
                Cookies.set('session', model.toJSON(), {expires: 1});
            });
        },
        checkAuth: function () {
            console.log('Debug: check auth');
        },
        login: function (user, password) {
            this.set({user: user, password: password});

            console.log('Debug: login');
        },
        logout: function () {
            console.log('Debug: logout');
        }
    });

    var app = new Marionette.Application({
        session: new SessionModel()
    });

    app.reqres.setHandlers({
        session: function () {
            return app.session;
        }
    });

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

        console.log(app.session);

        app.session.login('aaa', 'bbb', true);

        console.log(app.session);

        var layoutView = new AppLayoutView({
            model: new Item()
        });

        app.regions.item.show(layoutView);



        console.log(Cookies.get('aaa'));
    });

    Cookies.set('aaa', 'value');

    app.start();
});