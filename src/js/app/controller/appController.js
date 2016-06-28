define([
    'backbone',
    'marionette',
    'views/layoutView',
    'views/messageView',
    'firebase'
], function (
    Backbone,
    Marionette,
    AppLayoutView,
    MessageView,
    Firebase
) {
    var AppController = Marionette.Controller.extend({
        initialize: function () {
            this.layout = new AppLayoutView()
        },

        home: function () {
            if (Firebase.auth().currentUser) {
                Backbone.history.navigate('items', true);
            } else {
                this.layout.render();
                this.layout.content.show(
                    new MessageView({
                        message: 'Please, log in'
                    })
                );
            }
        },

        index: function () {
            Backbone.history.navigate('home', true);
        }
    });

    return new AppController();
});
