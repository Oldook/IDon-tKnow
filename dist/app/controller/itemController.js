define(["marionette","underscore","firebase","collection/itemList","model/item","views/layoutView","views/itemListView","views/editView","views/createView"],function(e,t,i,s,n,r,o,a,u){var c=e.Controller.extend({initialize:function(){this.layout=new r,this.itemList=new s,this.itemList.fetch()},showItems:function(){var e=i.auth().currentUser;e&&(this.layout.render(),this.layout.items.show(new o({collection:this.itemList,user:e.providerData[0].email})))},deleteItem:function(e){if(i.auth().currentUser){var t=this.itemList.get(e);t.destroy({success:function(){console.log("item with id "+e+" destroyed")}})}Backbone.history.navigate("items",!0)},likeItem:function(e){if(i.auth().currentUser){var t=this.itemList.get(e);t.like(i.auth().currentUser.providerData[0].email),t.save({success:function(){console.log("item with id "+e+" updated")}})}Backbone.history.navigate("items",!0)},editItem:function(e){if(i.auth().currentUser){var t=this.itemList.get(e),s=new a({model:t});s.on("edit",function(e){var i=e.view.ui.title.val(),s=e.view.ui.description.val();""!=i&&t.set("title",i),""!=s&&t.set("description",s),t.save(),Backbone.history.navigate("items",!0)}),this.layout.render(),this.layout.items.show(s)}},createItem:function(){if(i.auth().currentUser){var e=this.itemList,t=new u;t.on("create",function(t){var i=new n({title:t.view.ui.title.val(),description:t.view.ui.description.val(),id:e.getLastId()+1});e.push(i),i.save(),Backbone.history.navigate("items",!0)}),this.layout.render(),this.layout.items.show(t)}}});return new c});