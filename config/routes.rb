Dataflux::Application.routes.draw do

  root :to => "home#index"

  match "enlaces-de-interes" => "enlaces#index", :as=>"enlaces"
  match "soporte-y-descargas" => "soporte#index", :as=>"soporte"
  match "contacto" => "contacto#index"
  match "contacto-submit" => "contacto#submit"

  match "quienes-somos" => "acerca_de#index", :as=>"acerca_de"
  match "servicios-web" => "servicios_web#index", :as=>"web"
  match "soluciones-cloud" => "soluciones_cloud#index", :as=>"cloud"
  match "proyectos-tic" => "proyectos_tic#index", :as=>"tic"

  match "sitemap" => "sitemap#index"

end
