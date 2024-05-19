resource "azurerm_static_web_app_custom_domain" "static_web_app_custom_domain_txt" {
  static_web_app_id = module.static_web_app.id
  domain_name       = var.DOMAIN_NAME
  validation_type   = "dns-txt-token"
}