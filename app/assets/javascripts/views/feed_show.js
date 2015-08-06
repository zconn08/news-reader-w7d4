NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST['feed_show'],

  events: {
    "click .refresh": "refresh",
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  refresh: function () {
    this.model.fetch();
  },

  render: function(){
    this.$el.html(this.template({ feed: this.model }));
    
    this.model.entries().each(function (entry) {
      var entryView = new NewsReader.Views.Entry({ model: entry });
      this.$('.entries').append(entryView);
    });

    return this;
  },
});
