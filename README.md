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
        - filter by `true` or `false`
    - by date range: *GET/sales?initial=<date>&final=<date>*
    - customer purchases by gender: *GET/sales?gender=<gender>*
        - filter by `M` (masculine) or `F` (feminine)
    - customer purchases by age: *GET/sales?age=<age>*
    - customer purchases by email: *GET/sales?email=<email>*
    - customer purchases by satisfaction: *GET/sales?satisfaction=<level>*
        - filter by 0 (the worst) into 5 (the best)
    
    
- Read a specific sale: *GET/sales/id/:id*

- List all distinct customers: *GET/customers*

- List all store locations: *GET/storeLocation*
    
- List all purchase method: *GET/purchaseMethod*

- Create a new sale: *POST/sales*

- Update the sale, items and consumer infos: *PUT/sales/id/:id*
    
- Delete a specific sale: *DELETE/sales/id/:id*

## About UI
[mern_sales_supplies.drawio.pdf](https://github.com/augsmachado/mern_sales_supplies/files/7414775/mern_sales_supplies.drawio.pdf)


