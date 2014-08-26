'use strict';
//////////////////
//views
///////////////////

var HomeView = Parse.View.extend({

	template: _.template($('.home-template').text()),


	initialize: function() {
		$('.home-view').append(this.el)
		this.render();
	},

	render: function() {
		var renderTemplate = this.template(this.model)
		this.$el.html(renderTemplate);
		return this;
	},

});

var CheckListView = Parse.View.extend({

	checklistTemplate: _.template($('.checklist-template').text()),

	initialize: function() {
		$('.checklist-view').append(this.el)
		this.render();
	},

	render: function() {
		var renderTemplate = this.checklistTemplate(this.model)
		this.$el.html(renderTemplate);
		return this;
	},
});

var ScheduleView = Parse.View.extend({

	scheduleTemplate: _.template($('.schedule-template').text()),

	initialize: function() {
		$('.schedule-view').append(this.el)
		this.render();
	},

	render: function() {
		var renderTemplate = this.scheduleTemplate(this.model)
		this.$el.html(renderTemplate);
		return this;
	},
});

var NotesView = Parse.View.extend({

	notesTemplate: _.template($('.notes-template').text()),

	initialize: function() {
		$('.notes-view').append(this.el)
		this.render();
	},

	render: function() {
		var renderTemplate = this.notesTemplate(this.model)
		this.$el.html(renderTemplate);
		return this;
	},
});