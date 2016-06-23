define(['marionette', 'controller/appController'], function (Marionette, appController) {
    return new Marionette.AppRouter({
        controller: appController,
        appRoutes: {
            'home': 'home',
            '': 'index'
        }
    });
});