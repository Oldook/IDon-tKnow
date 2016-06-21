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
            items: '#items'
        }
    });
});