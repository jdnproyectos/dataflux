# encoding: utf-8

class ServiciosController < ApplicationController

  before_filter :set_headercaption
  
  def set_headercaption
    @headercaption = "here goes <strong>servicios</strong> header caption."
  end

end
