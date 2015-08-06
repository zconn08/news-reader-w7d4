NewsReader.Views.Form = Backbone.View.extend({
  template: JST['form'],

  events: {
    "submit form": "addFeed"
  },

  addFeed: function (e) {
    e.preventDefault();
    var formData = $(e.currentTarget).serializeJSON();
    var feed = new NewsReader.Models.Feed(formData);
    feed.save({}, { success: function () {
      this.collection.add(feed);
      Backbone.history.navigate('feeds/' + feed.id, { trigger: true });
    }.bind(this)});
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  }
});
