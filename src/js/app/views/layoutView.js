define([
    'marionette',
    'text!layouts/appLayout.html'
], function (
    Marionette,
    appLayout
) {
    return Marionette.LayoutView.extend({
        el: 'body',
        template: appLayout,

        regions: {
            content: '#content',
            alert: '#alert'
        },

        events: {
            'click .close' : 'clickClose'
        },

        clickClose: function (e) {
            $(e.currentTarget).closest('.alert').hide();
        }
    });
});