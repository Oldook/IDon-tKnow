define(['marionette', 'controller/userController'], function (Marionette, userController) {
    return new Marionette.AppRouter({
        controller: userController,
        appRoutes: {
            'registration': 'registration',
            'login': 'login',
            'logout': 'logout'
        }
    });
});