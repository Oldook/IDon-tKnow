define([
    'jquery',
    'marionette',
    'views/registrationView',
    'text!layouts/appLayout.html'
], function (
    $,
    Marionette,
    registrationView,
    appLayout
) {
    console.log('Debug: user controller');

    var AppLayoutView = Marionette.LayoutView.extend({
        el: '#content',
        template: appLayout,

        regions: {
            items: '#items'
        }
    });

    var ItemController = Marionette.Controller.extend({
        registration: function () {
            console.log('Debug: registration');

            var layout = new AppLayoutView();
            layout.render();
            layout.items.show(new registrationView());
        },
        login: function () {
            console.log('Debug: login');

            this.saveLocation();
        },
        logout: function () {
            console.log('Debug: logout');

            this.saveLocation();
        }
    });

    return new ItemController();
});
