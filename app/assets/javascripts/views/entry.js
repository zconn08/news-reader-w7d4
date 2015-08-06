NewsReader.Views.Entry = Backbone.View.extend({
  template: JST['entry'],
  tagName: 'li',

  render: function () {
    this.$el.html(this.template({ entry: this.model }));
    return this;
  }
});
