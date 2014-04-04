class HomeController < ApplicationController

  def index
    @scroller_marcas = [
      "aerohive.png",
      "aruba.png",
      "asterisk.png",
      "cisco.png",
      "mikrotik.png",
      "ruckus.png",
      "ubiquiti.png"
    ]
    @scroller_clientes = [
      "aeronautica_civil.png",
      "aluminaire.png",
      "charter.png",
      "colegio_hebreo.png",
      "country_plaza.png",
      "easy_soat.png",
      "gsp.png",
      "lemon.png",
      "lex_tattoo.png",
      "miramar.png",
      "pasteur.png",
      "perfect_beauty.png",
      "protecnica.png",
      "satec.png",
      "stewart_stevenson.png",
      "thermo_coil.png",
      "transporte_ejecutivo.png",
      "uribe_largacha.png",
      "villa_country.png"
    ]
  end

end
