define([
    'backbone',
    'marionette',
    'views/layoutView'
], function (
    Backbone,
    Marionette,
    AppLayoutView
) {
    var AppController = Marionette.Controller.extend({
        initialize: function () {
            this.layout = new AppLayoutView()
        },
        home: function () {
            this.layout.render();
        },
        index: function () {
            Backbone.history.navigate('home', true);
        }
    });

    return new AppController();
});
