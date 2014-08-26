

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


/*var List = Parse.Object.extend("list");


var ListCollection = Parse.Collection.extend({
  model: List

});


//VIEW:
//Forces settings into model.Takes the same data in model and makes changes.
ListView = Parse.View.extend({


  template: _.template($('.list-chore').text()),
  editTemplate: _.template($('.list-edit-chore').text()),

  //click buttons according to what you wish to change or update.
  events: {
    "click .edit-list": "editList",
    "click .remove-list": "deleteList",
    "click .store-list": "saveList",
  },

  //Methods//
  //Refreshes when there is a change in the model. Renders if there is a change to the container.
  initialize: function() {
    //append everything within the view?
    this.listenTo(this.model, 'change', this.render),
    $('.container').append(this.el)
    //this renders immediately w/o listing to when called.
    this.render();
  },


  render: function() {
    //Rendering Template
    var renderTemp = this.template(this.model.attributes)
    this.$el.html(renderTemp);

  },

 

  //Edit list/why attribute:because all the important instances are being passed with the attribute.
  editList: function() {
    var renderTemp = this.editTemplate(this.model.attributes)
    this.$el.html(renderTemp);
  },

  //Delete list
  deleteList: function() {
    this.model.destroy();
    this.remove();
  },

  saveList: function(){
//find:class
    var fieldvalue = this.$el.find('.field input').val();
  console.log(fieldvalue);
  
  //setting the new propety value of model locally
  this.model.set('list', fieldvalue);
  //saves the model
  this.model.save()
},

});

$(function(){
  $('.add-list').click(function(){
    var inputVal= $('.add-list-input').val()
    var newList=toDoList.add({list:inputVal})
 
    newList.save()
  })
})

AppView = Parse.View.extend({
 
  initialize: function(){
    this.listenTo(toDoList, 'add', function(list){
      new ListView({model: list})
    })
  }
 
});
 
// create instances
 
var toDoList = new ListCollection();

var app = new AppView();

toDoList.fetch();*/