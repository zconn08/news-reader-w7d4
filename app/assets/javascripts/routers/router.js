NewsReader.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "feedIndex",
    "feeds/:id": "feedShow"
  },

  initialize: function(options){
    this.collection = new NewsReader.Collections.Feeds();
    this.$rootEl = options.$rootEl;
  },

  feedIndex: function(){
    this.collection.fetch();
    var view = new NewsReader.Views.FeedIndex({ collection: this.collection });
    this._swapView(view);
  },

  feedShow: function(id){
    var view = new NewsReader.Views.FeedShow({
      model:
    });
  },

  _swapView: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.render().$el);
  }
});
