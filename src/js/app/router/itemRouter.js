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
            'items': 'items',
            'items/:id/delete': 'deleteItem'
        }
    });
});
