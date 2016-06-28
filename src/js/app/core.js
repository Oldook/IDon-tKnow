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
    var promise = new Promise(function(resolve, reject) {
        Firebase.initializeApp(config);
        Firebase.auth().onAuthStateChanged(function (user) {
            resolve();
        });
    });

    var app = new Marionette.Application();
    app.on('start', function () {
        Backbone.history.start();
    });


    promise.then(function () {
        app.start();
    });
});