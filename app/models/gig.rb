class Gig
  def self.all
    gig_details_file = File.read('lib/data/gigs.json')

    JSON.parse(gig_details_file)
  end
end
