'use strict';

////////////
//Router
///////////




var AppRouter = Parse.Router.extend ({

	routes: {
	 	"" 				: "home",
	 	"home" 			: "home",
	 	"checklist" 	: "checklist",
	 	"schedule" 		: "schedule",
	 	"notes" 		: "notes",
	 
	},

	initialize: function() {
	 	//whatever the current view is now is saying don't load anything 
	 	this.currentView = null;
	},

	swap: function(view) {
	 	if (this.currentView) this.currentView.remove();
	 	this.currentView = view;
	 	this.currentView.render();
	},

	home: function() {
	 	var view = new HomeView();
	 	this.swap(view);
	},

	checklist: function() {
	 	var view = new CheckListView();
	 	this.swap(view);
	},

	schedule: function() {
	 	var view = new ScheduleView();
	 	this.swap(view);
	},

	notes: function() {
	 	var view = new NotesView();
	 	this.swap(view);
	},

})

var router = new AppRouter();
Parse.history.start();


