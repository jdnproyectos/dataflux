class EnlacesController < ApplicationController

  def index
    @graph = Koala::Facebook::API.new "468664856582683|IzVB_5mOvHjOaXY2ZaNIPhrJodA"
    @feed = @graph.get_connections("dataflux", "feed", :limit=>10)
  end

end
