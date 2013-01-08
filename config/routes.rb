Dataflux::Application.routes.draw do

  root :to => "home#index"
  
  match "servicios" => "servicios#index"
  match "servicios/enlaces_de_largo_alcance"
  
  match "quienes_somos" => "quienes_somos#index"
  
  match "contacto" => "contacto#index"
  match "contacto/submit" => "contacto#submit"
  
end
