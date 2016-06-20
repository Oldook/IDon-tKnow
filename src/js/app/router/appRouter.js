define(['marionette', 'controller/appController'], function (Marionette, appController) {
    console.log('Debug: app router');

    return new Marionette.AppRouter({
        controller: appController,
        appRoutes: {
            'home': 'home',
            '': 'index'
        }
    });


});