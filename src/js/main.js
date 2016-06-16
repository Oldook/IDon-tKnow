requirejs.config({
    baseUrl: 'src/js',
    paths: {
        jquery: '../../lib/jquery/dist/jquery',
        marionette: '../../lib/backbone.marionette/lib/backbone.marionette',
        backbone: '../../lib/backbone/backbone',
        underscore: '../../lib/underscore/underscore',
        bootstrap: '../../lib/bootstrap/dist/js/bootstrap',
        controller: 'app/controller',
        model: 'app/model',
        collection: 'app/collection',
        views: 'app/views',
        router: 'app/router'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        }
    }
});

requirejs(['app/core']);
