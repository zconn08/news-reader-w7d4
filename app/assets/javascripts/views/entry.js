NewsReader.Views.Entry = Backbone.View.extend({
  template: JST['entry'],
  tagName: 'li',
  events: {
    "click .delete-entry" : "remove"
  },

  render: function () {
    this.$el.html(this.template({ entry: this.model }));
    return this;
  },

  remove: function () {
    this.model.destroy();
    Backbone.View.prototype.remove.call(this);
  }
});
