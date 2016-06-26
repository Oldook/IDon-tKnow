define([
    'backbone',
    'model/item'
], function (
    Backbone,
    Item
) {
    return new function () {
        this.create = function (attributes, successCallBack, failCallback) {
            var item = new Item(attributes);
            item.save(null, {
                success: successCallBack,
                error: failCallback
            });
        };
    };
});
