const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const url = 'mongodb://localhost:27017/restaurant_db'

const PORT = process.env.PORT || 8300;
const eurekaHelper = require('./eureka-helper');
const utils = require('./utils/utils')
const restaurantdb = require('./models/restaurant')

app.use(cors('*'))
app.use(bodyParser.json())

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('Database connected...')
})



function getRestaurantCount(){

}

function getFoodItemCountInPerticularRestaurant(){

}

app.get('/hello' , (request , response) => {
  response.json("Hello this is the restaurant service.... ")
})


app.listen(PORT, () => {
  console.log("restaurant-service started on port 8300...");
})


eurekaHelper.registerWithEureka('restaurant-service', PORT);