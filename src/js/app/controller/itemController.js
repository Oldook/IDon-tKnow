define([
    'jquery',
    'marionette',
    'firebaseApp',
    'collection/itemList'
], function (
    $,
    Marionette,
    Firebase,
    ItemList
) {
    console.log('Debug: item controller');

    var ItemController = Marionette.Controller.extend({
        home: function () {
            if (Firebase.auth().currentUser) {
                var itemList = new ItemList();
                console.log(itemList.fetch());
            }
        },
        profile: function () {
            console.log('Debug: profile');
        }
    });

    return new ItemController();
});
