define(['backbone', 'underscore', 'config'], function (Backbone, _, config) {
    return Backbone.Model.extend({
        url: function () {
            return config.databaseURL + '/items/' + this.id + '.json';
        },

        defaults: {
            title: 'default title',
            description: 'default description',
            likes: null
        },

        ifUserLiked: function (user) {
            return _.find(this.attributes.likes, function (userLike) {
                return userLike === user;
            }) ? true : false;
        },

        like: function (user) {
            var likes = this.attributes.likes;

            if (!this.ifUserLiked(user)) {
                likes.push(user);
            } else {
                var index = likes.indexOf(user);
                likes.splice(index, 1);
            }
        }
    });
});
