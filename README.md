# Sales Supplies documentation

## Objective
First of all, Sales Supplies is API REST for managing purchases, sales and inventory. In another hand, Sales Supplies allow to take a decision using dashboards and data analysis.

## About code

## About API
### Endpoints

- Search sales
    - all sales: *GET/sales*
    - by store location: *GET/sales?storeLocation=<city>*
        - filter by city name
    - by purchase method: *GET/sales?purchaseMethod=<method>*
        - filter by `In store`, `Online` or `Phone`
    - by use coupons: *GET/sales?couponUsed=<boolean>*
    - by date range: *GET/sales?initial=<date>&final=<date>*
    - customer purchases by gender: *GET/sales?gender=<gender>*
    - customer purchases by email: *GET/sales?email=<email>?*
    
- Read a specific sale: *GET/sales/:id*
    
- Create a new sale: *POST/sales/new*

- Update the sale, items and consumer infos: *PUT/sales/:id*

- List all store locations: *GET/storeLocation*

- Create user (?)

## About UI

