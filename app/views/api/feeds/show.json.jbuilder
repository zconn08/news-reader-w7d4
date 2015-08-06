json.extract! @feed, :title, :latest_entries
json.author @feed.user.username if @feed.user_id
