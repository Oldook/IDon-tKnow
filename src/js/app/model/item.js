define(['backbone', 'config'], function (Backbone, config) {
    return Backbone.Model.extend({
        defaults: {
            title: 'default title',
            description: 'default description',
            like: 1
        }
    });
});
