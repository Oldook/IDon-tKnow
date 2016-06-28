define(['backbone', 'underscore', 'config', 'firebase'], function (Backbone, _, config, firebase) {
    return Backbone.Model.extend({
        url: function () {
            return this.id == undefined ?
                config.databaseURL + '/items/?token=' + firebase.auth().currentUser.Xc :
                config.databaseURL + '/items/' + this.id + '?token=' + firebase.auth().currentUser.Xc;
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
            if (this.attributes.likes == undefined) {
                this.set('likes', []);
            }

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
