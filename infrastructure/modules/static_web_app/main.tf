resource "azurerm_static_web_app" "static_web_app" {
    name = var.static_web_app_name
    resource_group_name = var.resource_group_name
    location = var.region
}

resource "azurerm_static_web_app_custom_domain" "static_web_app_custom_domain" {
    count = var.custom_domain_name_count
    static_web_app_id = azurerm_static_web_app.static_web_app.id
    domain_name = "${var.subdomain_name}.${var.domain_name}"
    validation_type = "cname-delegation"
}