define(["marionette","backbone","firebase","views/registrationView","views/loginView","views/layoutView"],function(i,t,e,n,s,a){var o=i.Controller.extend({initialize:function(){this.layout=new a},registration:function(){if(e.auth().currentUser)t.history.navigate("items",!0);else{var i=new n;i.on("signUp",function(i){e.auth().createUserWithEmailAndPassword(i.view.ui.user.val(),i.view.ui.password.val()).then(function(){t.history.navigate("items",!0)})["catch"](function(i){var t=$("#registrationAlert");t.find("#alertMessage").text(i.message),t.show()})}),this.layout.render(),this.layout.items.show(i)}},login:function(){if(e.auth().currentUser)t.history.navigate("items",!0);else{var i=new s;i.on("login",function(i){e.auth().signInWithEmailAndPassword(i.view.ui.user.val(),i.view.ui.password.val()).then(function(){t.history.navigate("items",!0)})["catch"](function(i){var t=i.code,e=i.message;console.log(t),console.log(e)})}),this.layout.render(),this.layout.items.show(i)}},logout:function(){e.auth().currentUser?e.auth().signOut().then(function(){t.history.navigate("login",!0)}):t.history.navigate("items",!0)}});return new o});