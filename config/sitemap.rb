
SitemapGenerator::Sitemap.default_host = "http://www.dataflux.com.co"

SitemapGenerator::Sitemap.sitemaps_host = "http://sitemaps-bucket.s3.amazonaws.com/"

SitemapGenerator::Sitemap.public_path = "tmp/"

SitemapGenerator::Sitemap.sitemaps_path = "sitemaps/"

SitemapGenerator::Sitemap.adapter = SitemapGenerator::S3Adapter.new(
  aws_access_key_id: "AKIAITFQ34Q7YD5E3YQA",
  aws_secret_access_key: "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",
  fog_provider: "AWS",
  fog_directory: "sitemaps-bucket",
  fog_region: "sa-east-1"
)


SitemapGenerator::Sitemap.create do

  add "/", :changefreq=>"monthly"

  add "/enlaces_de_interes"
  add "/soporte_y_descargas", :changefreq=>"monthly"
  add "/contacto", :changefreq=>"monthly"
  add "/contacto_submit", :changefreq=>"monthly"

  add "/quienes_somos", :changefreq=>"monthly"
  add "/servicios_web", :changefreq=>"monthly"
  add "/soluciones_cloud", :changefreq=>"monthly"
  add "/proyectos_tic", :changefreq=>"monthly"

end
