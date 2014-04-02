class ContactoController < ApplicationController

  def submit
    if params[:authenticity_token]
      ContactoMailer.forward_submit(params).deliver
    else
      redirect_to root_path
    end
  end

end
