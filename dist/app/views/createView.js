define(["marionette","backbone","text!templates/create.html"],function(e,t,i){return e.LayoutView.extend({template:i,ui:{title:"#title",form:"form",description:"#description"},triggers:{"submit @ui.form":"create"},events:{"click .cancel":"cancel"},cancel:function(e){e.preventDefault(),t.history.navigate("items",!0)}})});