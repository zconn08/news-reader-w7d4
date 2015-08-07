NewsReader.Views.FeedShow = Backbone.CompositeView.extend({
  template: JST['feed_show'],

  events: {
    "click .refresh": "refresh",
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);

    this.model.entries().each(this.addEntryView.bind(this));

    this.listenTo(this.model.entries(), "add", this.addEntryView);
    this.listenTo(
      this.model.entries(),
      "remove",
      function (subview) { this.removeModelSubview('.entries', subview); }
    );
  },

  refresh: function () {
    this.model.fetch();
  },

  render: function(){
    this.$el.html(this.template({ feed: this.model }));
    this.attachSubviews();
    return this;
  },

  addEntryView: function (entry) {
    var entryView = new NewsReader.Views.Entry({ model: entry });
    this.addSubview('.entries', entryView);
  },
});
