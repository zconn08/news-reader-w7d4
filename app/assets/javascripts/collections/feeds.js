NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: 'api/feeds',
  model: NewsReader.Models.Feed,

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
