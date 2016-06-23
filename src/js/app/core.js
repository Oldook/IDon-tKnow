define([
    'config',
    'marionette',
    'backbone',
    'firebase',
    'router/appRouter',
    'router/userRouter',
    'router/itemRouter'
], function (
    config,
    Marionette,
    Backbone,
    Firebase,
    appRouter,
    userRouter,
    itemRouter
) {
    var app = new Marionette.Application();

    app.on('start', function () {
        console.log('Debug: app start');

        Backbone.history.start();
    });

    var promise = new Promise(function(resolve, reject) {
        Firebase.initializeApp(config);

        console.log('firebase promise');

        Firebase.auth().onAuthStateChanged(function (user) {
            console.log('Debug: firebase login');

            resolve();
        });
    });

    promise.then(function () {
        app.start();
    });
});