# APiNodejs_PostgreSQL

## Application developed to pratice NodeJS + Express + PostgreSQL

## Installing
```
$ yarn install
```
Or:
```
$ npm install
```

## Configuring
The application use: [PostgreSQL](https://www.postgresql.org/).

The application use: [Express](https://expressjs.com/pt-br/).

To start up the app run:
```
$ yarn start
```
Or:
```
$ npm run start
```
## Routes
|route|HTTP Method|params|description
|:---|:---:|:---:|:---:
|`/api/`|GET| - |List Welcome Page.
|`/api/products`|POST|Body with name `product_name` and `quantity` and price.|Create a new product
|`/api/products`|GET| - |List all Products.
|`/api/products/:id`|GET|Product `id` url parameter.| Get a Product by Id
|`/api/products/:id`|PUT|Product `id` url parameter.| Update a Product
|`/api/products/:id`|DELETE|Product `id` url parameter.| DELETE a Product by Id

----
