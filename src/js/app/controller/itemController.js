define([
    'jquery',
    'marionette',
    'firebase',
    'collection/itemList',
    'views/itemView',
    'views/layoutView',
    'model/item',
    'views/itemListView',
    'views/editView'
], function (
    $,
    Marionette,
    Firebase,
    ItemList,
    ItemView,
    LayoutView,
    Item,
    ItemListView,
    EditView
) {
    var ItemController = Marionette.Controller.extend({
        initialize: function () {
            this.layout = new LayoutView();

            this.itemList = new ItemList();
            this.itemList.fetch()
        },

        showItems: function () {
            var user = Firebase.auth().currentUser;
            if (user) {
                this.layout.render();
                this.layout.items.show(new ItemListView({
                        collection: this.itemList,
                        user: user.providerData[0].email
                    })
                );
            }
        },

        deleteItem: function (id) {
            var item = this.itemList.get(id);
            item.destroy({
                success: function () {
                    console.log('item with id ' + id + ' destroyed');
                }
            });

            Backbone.history.navigate('items', true);
        },

        likeItem: function (id) {
            var item = this.itemList.get(id);
            item.like(Firebase.auth().currentUser.providerData[0].email);
            item.save({
                success: function () {
                    console.log('item with id ' + id + ' updated');
                }
            });

            Backbone.history.navigate('items', true);
        },

        edit: function (id) {
            var item = this.itemList.get(id);

            if (Firebase.auth().currentUser) {
                this.layout.render();
                this.layout.items.show(new EditView({
                    model: item
                }))
            }
        }
    });

    return new ItemController();
});
