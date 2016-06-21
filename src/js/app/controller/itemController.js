define([
    'jquery',
    'marionette',
    'firebase',
    'collection/itemList',
    'views/itemView',
    'views/layoutView',
    'model/item',
    'views/itemListView'
], function (
    $,
    Marionette,
    Firebase,
    ItemList,
    ItemView,
    LayoutView,
    Item,
    ItemListView
) {
    var ItemController = Marionette.Controller.extend({
        initialize: function () {
            this.layout = new LayoutView();

            this.itemList = new ItemList();
            this.itemList.fetch()
        },
        items: function () {
            if (Firebase.auth().currentUser) {
                this.layout.render();
                this.layout.items.show(new ItemListView({collection: this.itemList}))
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
        }
    });

    return new ItemController();
});
