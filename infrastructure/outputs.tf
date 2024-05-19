output "api_key" {
  value     = module.static_web_app.api_key
  sensitive = true
}

output "default_host_name" {
  value = module.static_web_app.default_host_name
}

output "validation_token" {
  value = azurerm_static_web_app_custom_domain.static_web_app_custom_domain_txt.validation_token
  sensitive = true
}