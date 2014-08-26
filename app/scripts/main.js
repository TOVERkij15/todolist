

Parse.initialize("fn8iqeOjDwDB3IBG428xyxhs5iqR2OnsOUvcxGBT","rPJbC036qoMOKE5MgQ4Bc5Uvp62Y57WSCjZw1O8W");

//model

var User = Parse.Object.extend("user");

//collection

var UserCollection = Parse.Collection.extend({
  model: User
});

/////////////////////
///////todolist/////
///////////////////

/*var List = Parse.Model.extend("list");
//Default attributes://
  Defaults: function() {
    return {
      title: "empty list...", 
      order: Lists.nextOrder(),
      done: false
      
    };
  },
//toggling the done state for list//
  toggle: function() {
    this.save({done: !this.get("done")});
  }
});


var List = Parse.Collection.extend({
  model: list,

  done: function() {
    return this.where({done: false});
  },

  nextOrder: function() {
    if (!this.length) return 1;
    return this.last().get('order') + 1;
  },

  comparator: 'order'
});
//views//
var Lists = new List;

var ListView = Parse.View.extend({
  tagName: "li",

  template:_.template($('.').html()),

  events: {
    "click.toggle"    :"toggleDone",
    "dblclick.view"   : "edit",
    "click a.destroy" : "clear",
    "keypress.edit"   : "updateOnEnter",
    "blue.edit"       : "close"
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.toggleClass('done', this.model.get('done'));
    this.input = this.$('.edit');
    return this;
  },

  toggleDone: function() {
    this.model.toggle();
  },

  edit: function() {
    this.$el.addClass("editing");
    this.input.focus();
  },

  close: function() {
    var value = this.input.val();
    if(!value) {
      this.clear();
    }else {
      this.model.save({title: value});
      this.$el.removeClass("editing");
    }
  },

  updateOnEnter: function(e) {
    if(e.keyCode == 13)this.code();
  },

  clear: function()  {
    this.model.destroy();
  }
});

var AppView = Parse.View.extend({
  el: $(#list),

  statsTemplate: _.template($('#stats-template').html()),

  events: {
    "keypress #new-list"      : "createOnEnter",
    "click #clear-completed"  : "clearCompleted",
    "click #toggle-all"       : "toggleAllComplete"
  },

  initialize: function() {
    this.input = this.$("#new-list");
    this.allCheckbox = this.$("#toggle-all")[0];

    this.listenTo(Lists, 'add', this.addOne);
    this.listenTo(Lists, 'resest', this.addAll);
    this.listenTo(Lists, 'all', this.render);

    this.footer = this.$('footer');
    this.main = $('#main');

    Lists.fetch();
  },

  render: function() {
    var done = Lists.done().length;
    var remaining = Lists.remaining().length;

    if(Lists.length) {
      this.main.show();
      this.footer.show();
      this.footer.html(this.statsTemplate({done: done, remaining}))
    }
  }
})*/
 