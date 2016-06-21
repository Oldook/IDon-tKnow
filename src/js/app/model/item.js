define(['backbone', 'config'], function (Backbone, config) {
    return Backbone.Model.extend({
        url: function () {
            return config.databaseURL + '/items/' + this.id + '.json';
        },
        defaults: {
            title: 'default title',
            description: 'default description',
            like: 1
        }
    });
});
