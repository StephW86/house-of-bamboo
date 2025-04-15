class VideosController < ApplicationController
  def index
    @video = view_context.asset_path("video_#{rand(1..4)}")
  end
end
