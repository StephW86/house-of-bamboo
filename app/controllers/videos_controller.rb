class VideosController < ApplicationController
  def index
    @index = 1
    @video = view_context.asset_path("video_#{@index}.mp4")
  end
end
