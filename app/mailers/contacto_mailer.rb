class ContactoMailer < ActionMailer::Base

  default :from => "noreply@dataflux.com.co"

  def forward_submit(params)
    @nombre = params[:nombre]
    @email = params[:email]
    @mensaje = params[:mensaje]
    if ENV["RAILS_ENV"].to_s == "development"
      mail(:to => "fbruges@gmail.com", :subject=>"Nuevo mensaje de contacto | dataflux.com.co")
    else
      mail(:to => "info@dataflux.com.co", :subject=>"Nuevo mensaje de contacto | dataflux.com.co")
    end
  end

end
