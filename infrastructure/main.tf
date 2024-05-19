module "static_web_app" {
  source                   = "./modules/static_web_app"
  region                   = var.REGION
  resource_group_name      = azurerm_resource_group.resource_group.name
  static_web_app_name      = var.STATIC_WEB_APP_NAME
  custom_domain_name_count = var.CUSTOM_DOMAIN_NAME_COUNT
  domain_name              = var.DOMAIN_NAME
  subdomain_name           = var.SUBDOMAIN_NAME
}