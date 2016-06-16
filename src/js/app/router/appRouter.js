define(['marionette', 'controller/itemController'], function (Marionette, itemController) {
    console.log('Debug: app router');

    return new Marionette.AppRouter({
        controller: itemController,
        appRoutes: {
            'home': 'home',
            'profile': 'profile'
        }
    });


});