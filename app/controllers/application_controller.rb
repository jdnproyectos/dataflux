# encoding: utf-8;

class ApplicationController < ActionController::Base

  protect_from_forgery
  helper_method :date_to_es, :parallax_offset

#  before_filter :load_tweets

  def date_to_es(datestring)
    return datestring.gsub("Monday","Lunes").gsub("Tuesday","Martes").gsub("Wednesday","Miércoles").gsub("Thursday","Jueves").gsub("Friday","Viernes").gsub("Saturday","Sábado").gsub("Sunday","Domingo").gsub("January","Enero").gsub("February","Febrero").gsub("March","Marzo").gsub("April","Abril").gsub("May","Mayo").gsub("June","Junio").gsub("July","Julio").gsub("August","Agosto").gsub("September","Septiembre").gsub("October","Octubre").gsub("November","Noviembre").gsub("December","Diciembre")
  end

  def parallax_offset
    "200"
  end

#  def load_tweets
#    @twitter_user = "dataflux"
#    Rails.cache.fetch(@twitter_user, :expires_in => 10.minutes) do
#      status = Twitter.user(@twitter_user).status
#      @last_tweet = format_tweet(status)
#    end
#  end

#  def format_tweet(status)
#    @entities = []
#    status.urls.each do |url|
#      @entities.append [ url.url, url.url ]
#    end
#    status.user_mentions.each do |um|
#      @entities.append [ "@"+um.screen_name, "http://twitter.com/"+um.screen_name ]
#    end
#    status_text = status.text
#    @entities.each do |e|
#      status_text = status_text.gsub(e.first, "<a href='"+e.second+"' target='_blank'>"+e.first+"</a>")
#    end
#    return [ status_text, status.created_at, status.id ]
#  end

end
