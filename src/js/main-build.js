requirejs.config({
    baseUrl: 'dist',
    paths: {
        firebase: '../../lib/firebase/firebase',
        text: '../../lib/text/text',
        jquery: '../../lib/jquery/dist/jquery',
        marionette: '../../lib/backbone.marionette/lib/backbone.marionette',
        backbone: '../../lib/backbone/backbone',
        underscore: '../../lib/underscore/underscore',
        bootstrap: '../../lib/bootstrap/dist/js/bootstrap',
        controller: 'app/controller',
        model: 'app/model',
        collection: 'app/collection',
        views: 'app/views',
        router: 'app/router',
        templates: 'templates',
        layouts: 'templates/layouts'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'firebase': {
            exports: 'firebase'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    }
});

requirejs(['app/core']);