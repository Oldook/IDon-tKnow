define([
    'marionette',
    'controller/itemController'
], function (
    Marionette,
    appController
) {
    return new Marionette.AppRouter({
        controller: appController,
        appRoutes: {
            'items': 'showItems',
            'items/:id/delete': 'deleteItem',
            'items/:id/like': 'likeItem',
            'items/:id/edit': 'editItem',
            'items/create': 'createItem'
        }
    });
});
