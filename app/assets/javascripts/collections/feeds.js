NewsReader.Collections.Feeds = Backbone.Collection.extend({
  model: NewsReader.Models.Feed,

  initialize: function (options) {
    this.url = options ? options.url : 'api/feeds';
  },

  getOrFetch: function (id) {
    var feed = this.get(id);
    if (!feed) {
      feed = new NewsReader.Models.Feed({ id: id });
      this.add(feed);
    }
    feed.fetch();
    return feed;
  },
});
