# encoding: utf-8

class ContactoController < ApplicationController

  def index
    @headercaption = "here goes <strong>contacto</strong> header caption."
  end
  
  def submit
    if params[:authenticity_token]
      ContactMailer.forward_submit(params).deliver
    else
      redirect_to root_path
    end
  end

end
