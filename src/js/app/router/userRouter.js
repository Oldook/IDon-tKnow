define(['marionette', 'controller/userController'], function (Marionette, userController) {
    console.log('Debug: user router');

    return new Marionette.AppRouter({
        controller: userController,
        appRoutes: {
            'registration': 'registration',
            'login': 'login',
            'logout': 'logout'
        }
    });


});