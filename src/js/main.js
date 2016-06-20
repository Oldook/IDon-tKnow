requirejs.config({
    baseUrl: 'src/js',
    paths: {
        firebase: '../../lib/firebase/firebase',
        text: '../../lib/text/text',
        jquery: '../../lib/jquery/dist/jquery',
        marionette: '../../lib/backbone.marionette/lib/backbone.marionette',
        backbone: '../../lib/backbone/backbone',
        'backbone.wreqr': '../../lib/backbone.wreqr/lib/backbone.wreqr',
        backboneFire: '../../lib/backbonefire/dist/backbonefire',
        underscore: '../../lib/underscore/underscore',
        cookie: '../../lib/js-cookie/src/js.cookie',
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
        },
        'backboneFire': {
            deps: [
                'backbone',
                'firebase'
            ]
        }
    }
});

requirejs(['app/core']);