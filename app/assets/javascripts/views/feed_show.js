NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST['feed_show'],

  render: function(){
    this.$el.html(this.template({ feed: this.model }));
    return this;
  }
});
