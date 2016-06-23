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
        },

        edit: function (id) {
            if (Firebase.auth().currentUser) {
                var item = this.itemList.get(id);

                this.layout.render();
                this.layout.items.show(new EditView({
                    model: item
                }))
            }
        },

        create: function () {
            if (Firebase.auth().currentUser) {
                var item = this.itemList.get(id);

                this.layout.render();
                this.layout.items.show(new CreateView({

                }))
            }
        }
    });

    return new AppController();
});
