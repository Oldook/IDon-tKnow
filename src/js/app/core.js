define([
    'config',
    'cookie',
    'marionette',
    'backbone',
    'jquery',
    'firebase',
    'router/appRouter',
    'router/userRouter',
    'collection/itemList'
], function (
    config,
    Cookies,
    Marionette,
    Backbone,
    $,
    Firebase,
    appRouter,
    userRouter,
    itemList
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

            resolve('aaa');
        });
    });

    promise.then(function () {
        app.start();
    });
});