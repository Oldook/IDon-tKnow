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
                wait: true,
                success: successCallBack,
                error: failCallback
            });
        };

        this.edit = function (item, attributes, successCallBack, failCallback) {
            item.save(attributes, {
                patch: true,
                wait: true,
                success: successCallBack,
                error: failCallback
            });
        };
        
        this.delete = function (item, successCallBack, failCallback) {
            item.destroy({
                wait: true,
                success: successCallBack,
                error: failCallback
            })
        }
    };
});
