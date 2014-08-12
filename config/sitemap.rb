
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

  add "/enlaces-de-interes"
  add "/soporte-y-descargas", :changefreq=>"monthly"
  add "/contacto", :changefreq=>"monthly"
  add "/contacto-submit", :changefreq=>"monthly"

  add "/quienes-somos", :changefreq=>"monthly"
  add "/servicios-web", :changefreq=>"monthly"
  add "/soluciones-cloud", :changefreq=>"monthly"
  add "/proyectos-tic", :changefreq=>"monthly"

end
