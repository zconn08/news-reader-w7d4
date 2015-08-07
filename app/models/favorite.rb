class Favorite < ActiveRecord::Base
  validates :feed, :user, presence: true
  validates :feed_id, uniqueness: { scope: :user_id }
  belongs_to :feed
  belongs_to :user
end
