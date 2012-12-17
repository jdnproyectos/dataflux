class ContactMailer < ActionMailer::Base

  default from: "mailerbot@dataflux.com"
  
  def forward_submit(params)
    @nombre = params[:nombre]
    @email = params[:email]
    @msj = params[:msj]
    mail(:to => "fbruges@gmail.com", :subject=>"Nuevo mensaje - dataflux.com.co")
  end
  
end
