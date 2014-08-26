'use strict';

//////////////////
//views
///////////////////

/*var HomeView = Parse.View.extend({

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

});*/




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

var InstructionView = Parse.View.extend({

	instructionTemplate: _.template($('.instruction-template').text()),

	initialize: function() {
		$('.instruction-view').append(this.el)
		this.render();
	},

	render: function() {
		var renderTemplate = this.instructionTemplate(this.model)
		this.$el.html(renderTemplate);
		return this;
	},
});

var FashionView = Parse.View.extend({

	fashionTemplate: _.template($('.fashion-template').text()),

	initialize: function() {
		$('.fashion-view').append(this.el)
		this.render();
	},

	render: function() {
		var renderTemplate = this.fashionTemplate(this.model)
		this.$el.html(renderTemplate);
		return this;
	},
});

var ApartmentView = Parse.View.extend({

	apartmentTemplate: _.template($('.apartment-template').text()),

	initialize: function() {
		$('.apartment-view').append(this.el)
		this.render();
	},

	render: function() {
		var renderTemplate = this.apartmentTemplate(this.model)
		this.$el.html(renderTemplate);
		return this;
	},
});
  
/*var ShoeView = Parse.View.extend({

	shoeTemplate: _.template($('.shoe-template').text()),

	initialize: function() {
		$('.shoe-view').append(this.el)
		this.render();
	},

	render: function() {
		var renderTemplate = this.shoeTemplate(this.model)
		this.$el.html(renderTemplate);
		return this;
	},
});*/
