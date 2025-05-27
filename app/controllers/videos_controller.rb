class VideosController < ApplicationController
  def index
    video_num = 1

    if video_num < 7
      video_num += 1
      @video = view_context.asset_path("video_#{video_num}.mp4")
  end
end

# add next arrow when video ends
# on clicking next video += 1
# when the videos reach 6 go back to 1
