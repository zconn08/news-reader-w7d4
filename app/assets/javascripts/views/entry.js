NewsReader.Views.Entry = Backbone.View.extend({
  template: JST['entry'],
  tagName: 'li',
  events: {
    "click .delete-entry" : "deleteEntry"
  },

  render: function () {
    this.$el.html(this.template({ entry: this.model }));
    return this;
  },

  deleteEntry: function(){
    this.model.destroy();
    this.remove();
  }
});
