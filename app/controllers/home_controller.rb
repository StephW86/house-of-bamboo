class HomeController < ApplicationController
  def index
    @gigs = Gig.all
    @upcoming_gigs = @gigs.select { |gig| Date.parse(gig['date']) >= Date.current }
  end
end
