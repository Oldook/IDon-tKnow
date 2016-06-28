define([
    'marionette',
    'firebase',
    'collection/itemList',
    'views/layoutView',
    'views/itemListView',
    'views/editView',
    'views/createView',
    'views/messageView',
    'service/itemService'
], function (
    Marionette,
    Firebase,
    ItemList,
    LayoutView,
    ItemListView,
    EditView,
    CreateView,
    MessageView,
    ItemService
) {
    var ItemController = Marionette.Controller.extend({
        initialize: function () {
            this.layout = new LayoutView();

            this.itemList = new ItemList();
            this.itemList.fetch()
        },

        showMessage: function (message) {
            this.layout.content.show(
                new MessageView({
                    message: message
                })
            );
        },

        showItems: function () {
            this.layout.render();

            var user = Firebase.auth().currentUser;
            if (user) {
                this.layout.content.show(
                    new ItemListView({
                        collection: this.itemList,
                        user: user.providerData[0].email
                    })
                );
            } else {
                this.showMessage('You need to login');
            }
        },

        deleteItem: function (id) {
            this.layout.render();

            if (Firebase.auth().currentUser) {
                var item = this.itemList.get(id);
                ItemService.delete(item,
                    function (model, response, options) {
                        Backbone.history.navigate('items', true);
                    },
                    function (model, response, options) {
                        Backbone.history.navigate('items', true);
                    }
                );
            } else {
                this.showMessage('You need to login');
            }
        },

        likeItem: function (id) {
            this.layout.render();

            if (Firebase.auth().currentUser) {
                var item = this.itemList.get(id);
                item.like(Firebase.auth().currentUser.providerData[0].email);
                ItemService.edit(item, {likes: item.get('likes')},
                    function (model, response, options) {
                        Backbone.history.navigate('items', true);
                    },
                    function (model, response, options) {
                        Backbone.history.navigate('items', true);
                    }
                );
            } else {
                this.showMessage('You need to login');
            }
        },

        editItem: function (id) {
            this.layout.render();

            if (Firebase.auth().currentUser) {
                var item = this.itemList.get(id);

                var view = new EditView({ model: item });
                view.on('edit', function (e) {
                    var newTitle = e.view.ui.title.val();
                    var newDescription = e.view.ui.description.val();

                    var changes = {};

                    if ( newTitle != '') {
                        changes.title = newTitle;
                    }

                    if ( newDescription != '') {
                        changes.description = newDescription;
                    }

                    console.log(changes);

                    ItemService.edit(item, changes,
                        function (model, response, options) {
                            Backbone.history.navigate('items', true);
                        },
                        function (model, response, options) {
                            view.showAlert(response.responseText);
                        }
                    );
                });

                this.layout.content.show(view);
            } else {
                this.showMessage('You need to login as admin');
            }
        },

        createItem: function () {
            this.layout.render();

            if (Firebase.auth().currentUser) {
                var itemList = this.itemList;

                var view= new CreateView();
                view.on('create', function (e) {
                    ItemService.create(
                        {
                            title: e.view.ui.title.val(),
                            description: e.view.ui.description.val()
                        },
                        function (model, response, options) {
                            itemList.push(model);
                            Backbone.history.navigate('items', true);
                        },
                        function (model, response, options) {
                            view.showAlert(response.responseText);
                        }
                    );
                });

                this.layout.content.show(view);
            } else {
                this.showMessage('You need to login as admin');
            }
        }
    });

    return new ItemController();
});
