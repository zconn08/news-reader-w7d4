class Api::FeedsController < ApplicationController
  def index
    render :json => Feed.order(:id)
  end

  def show
    @feed = Feed.find(params[:id])
    render 'show'
  end

  def favorites
    render json: current_user.favorite_feeds
  end

  def create
    id = current_user ? current_user.id : nil
    feed = Feed.find_or_create_by_url(feed_params[:url], id)
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  private

  def feed_params
    params.require(:feed).permit(:title, :url)
  end
end
