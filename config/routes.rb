Dataflux::Application.routes.draw do

  root :to => "home#index"

  match "enlaces_de_interes" => "enlaces#index", :as=>"enlaces"
  match "soporte_y_descargas" => "soporte#index", :as=>"soporte"
  match "contacto" => "contacto#index"
  match "contacto_submit" => "contacto#submit"

  match "quienes_somos" => "acerca_de#index", :as=>"acerca_de"
  match "servicios_web" => "servicios_web#index", :as=>"web"
  match "soluciones_cloud" => "soluciones_cloud#index", :as=>"cloud"
  match "proyectos_tic" => "proyectos_tic#index", :as=>"tic"

  match "sitemap" => "sitemap#index"

end
