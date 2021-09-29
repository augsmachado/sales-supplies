# Sales Supplies documentation

## Objective
First of all, Sales Supplies is API REST for managing purchases, sales and inventory. In another hand, Sales Supplies allow to take a decision using dashboards and data analysis.

## About code

## About API
### Filters

- Search all sales: *GET/sales*
    - Search all sales of a specifc store location: *GET/sales?storeLocation=<city>*
    - Search all sales of a specific purchase method: *GET/sales?purchaseMethod=<method>*
    - Search all sales that use coupons: *GET/sales?couponUsed=<boolean>*
    - Search all sales in date range: *GET/sales?initial=<date>&final=<date>*
    
- Search an specific sales: *GET/sales/:id*
    
- Create a new sale: *POST/sales/new*

- Update infos of a sale: *PUT/sales/:id*


## About UI

