define([
    'marionette',
    'underscore',
    'firebase',
    'collection/itemList',
    'model/item',
    'views/layoutView',
    'views/itemListView',
    'views/editView',
    'views/createView'
], function (
    Marionette,
    _,
    Firebase,
    ItemList,
    Item,
    LayoutView,
    ItemListView,
    EditView,
    CreateView
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
            if (Firebase.auth().currentUser) {
                var item = this.itemList.get(id);
                item.destroy({
                    success: function () {
                        console.log('item with id ' + id + ' destroyed');
                    }
                });
            }

            Backbone.history.navigate('items', true);
        },

        likeItem: function (id) {
            if (Firebase.auth().currentUser) {
                var item = this.itemList.get(id);
                item.like(Firebase.auth().currentUser.providerData[0].email);
                item.save({
                    success: function () {
                        console.log('item with id ' + id + ' updated');
                    }
                });
            }

            Backbone.history.navigate('items', true);
        },

        editItem: function (id) {
            if (Firebase.auth().currentUser) {
                var item = this.itemList.get(id);

                var view = new EditView({ model: item });
                view.on('edit', function (e) {
                    var newTitle = e.view.ui.title.val();
                    var newDescription = e.view.ui.description.val();

                    if (newTitle != '') {
                        item.set('title', newTitle);
                    }

                    if (newDescription != '') {
                        item.set('description', newDescription);
                    }

                    item.save();

                    Backbone.history.navigate('items', true);
                });

                this.layout.render();
                this.layout.items.show(view);
            }
        },

        createItem: function () {
            if (Firebase.auth().currentUser) {
                var itemList = this.itemList;

                var view= new CreateView();
                view.on('create', function (e) {
                    var item = new Item({
                        title: e.view.ui.title.val(),
                        description: e.view.ui.description.val(),
                        id: itemList.getLastId() + 1
                    });

                    itemList.push(item);
                    item.save();

                    Backbone.history.navigate('items', true);
                });

                this.layout.render();
                this.layout.items.show(view);
            }
        }
    });

    return new ItemController();
});
