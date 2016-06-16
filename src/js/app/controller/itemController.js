define(['jquery', 'marionette'], function ($, Marionette) {
    console.log('Debug: item controller');

    var ItemController = Marionette.Controller.extend({
        home: function () {
            console.log('Debug: home');
        },
        profile: function () {
            console.log('Debug: profile');
        }
    });

    return new ItemController();
});
