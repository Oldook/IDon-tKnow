define([
    'marionette',
    'views/itemView'
], function (
    Marionette,
    ItemView
) {
    return Marionette.CollectionView.extend({
        childView: ItemView,
        childViewOptions: function () {
            return {
                "user": this.options.user
            }
        },
        onRemoveChild: function (child) {
            child.$el.fadeOut(300);
            console.log('remove child');
        }
    });
});
