define([
    'marionette',
    'text!templates/message.html'
], function (
    Marionette,
    messageTemplate
) {
    return Marionette.LayoutView.extend({
        template: messageTemplate,

        serializeData: function() {
            return {
                message: Marionette.getOption(this, "message")
            }
        }
    });
});
