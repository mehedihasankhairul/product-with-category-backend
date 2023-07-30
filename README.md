<!-- writing md file for product backend with category -->

# category wise product backend

## Description

This is a Nodejs backend for category wise product. This backend is developed using Express.js. This backend is connected with MongoDB database with mongoose.

## Installation

To install this backend you need to clone this repository and run `npm install` to install all the dependencies.

## Running the server

After that you need to run `npm start` to start the server.

## API Endpoints

### Category Endpoints

- `GET http://localhost:5000/categories ` - to get all categories
- `POST http://localhost:5000/categories` - To create a new category (please provide the category name in the request body)

### Product Endpoints

- `GET http://localhost:5000/categories/:categoryId/products ` - Fetch products by a specific category ID
- `POST http://localhost:5000/categories/:categoryId/products ` - Add a new product to a specific category (provide product name and quantity in the request body)

## notes

_category id is the id of the category which is created by mongodb._
_i have used postman to test the api_
_i have created 4 category and 2 product for each category_

## category id

`apple` - 64c6a36e47f2cbc61f50e243
`samsung` - 64c6a5bb47f2cbc61f50e24d
`xiaomi` - 64c6a5c347f2cbc61f50e24f
`OPPO` - 64c6a5ce47f2cbc61f50e251

## package used

`express`
`mongoose`
`nodemon`
`cors`
`body-parser`

## Author

`Mehedi Hasan Khairul`
