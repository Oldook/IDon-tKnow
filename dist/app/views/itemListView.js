define(["marionette","views/itemView"],function(e,i){return e.CollectionView.extend({childView:i,childViewOptions:function(){return{user:this.options.user}}})});