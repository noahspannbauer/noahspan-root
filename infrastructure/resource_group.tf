resource "azurerm_resource_group" "resource_group" {
  name     = var.RESOURCE_GROUP_NAME
  location = var.REGION
}