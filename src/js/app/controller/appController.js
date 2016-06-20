define([
    'jquery',
    'marionette',
    'text!layouts/appLayout.html'
], function (
    $,
    Marionette,
    appLayout
) {
    console.log('Debug: app controller');

    var AppLayoutView = Marionette.LayoutView.extend({
        el: '#content',
        template: appLayout
    });

    var AppController = Marionette.Controller.extend({
        home: function () {
            console.log('Debug: home');

            var layout = new AppLayoutView();
            layout.render();
        },

        index: function () {
            console.log('Debug: index');
        }
    });

    return new AppController();
});
