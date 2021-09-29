const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const multer = require('multer')
const cryptoJS = require('crypto-js')
const Request = require('request')

const url = 'mongodb://localhost:27017/restaurant_db'

const PORT = process.env.PORT || 8300;
const eurekaHelper = require('./eureka-helper');
const utils = require('./utils/utils')
const restaurantdb = require('./models/restaurant')
const upload = multer({dest : 'uploads/'})

app.use(cors('*'))
app.use(bodyParser.json())
app.use(express.static('uploads'))

mongoose.connect(url, {

    useNewUrlParser:true

}).then(() => {

  console.log("Successfully connected to the database")

}).catch((err) => {

  console.log('Could not connect to the database.', err);
  process.exit();

})
 
app.get('/hello' , (request , response) => {
  response.json("Hello this is the restaurant service.... ")
})

// Api for restaurant Sign in

app.post('/auth/signin' , (request , response) => {

  const Password = cryptoJS.MD5(request.body.password)

  restaurantdb.find({
    email : request.body.email 
  } , (error , data) => {

    const passwordOfRestaurant = data[0].password

    if(error){
      response.send(utils.createError(error))
    }else if(passwordOfRestaurant == Password){
      response.send(utils.createData(data))
    }else{
      response.send(utils.createError("email or password is invalid"))
    }
    
  })

})

// Api for adding the restaurant

app.post('/addrestaurant' , upload.single('restaurant_thumbnail') ,  (request , response) => {

  const filename = request.file.filename

  const encryptedPassword = cryptoJS.MD5(request.body.password)

  const restaurant =  new restaurantdb({
    name : request.body.name,
    address : request.body.address,
    phone : request.body.phone,
    email : request.body.email,
    password : encryptedPassword,
    zipcode : request.body.zipcode,
    restaurant_thumbnail : filename,
    restaurant_rating : request.body.restaurant_rating,
    description : request.body.description
  })

  restaurant.save().then((data) => {
    response.send(utils.createData(data))
  }).catch((error) => {
    response.send(utils.createError(error))
  })

})

// Api for adding the food item in perticular restaurant

app.put('/addfooditem/:name' , upload.single('food_thumbnail') , (request , response) => {

  const filename = request.file.filename

  restaurantdb.findOneAndUpdate({name : request.params.name} , 
    {
      $push:{
      fooditems:{
                  category : request.body.category,
                  name : request.body.name,
                  priceperunit : request.body.priceperunit,
                  food_thumbnail : filename,
                  food_rating : request.body.food_rating,
                  description : request.body.description}
      }
    } , 
    {new: true},
    (error , data) => {
      if(error){
        response.send(utils.createError(error))
      }else{
        response.send(utils.createData(data))
      }
  })
})

// Api for getting all the restaurants

app.get('/restaurants' , (request , response) => {
  restaurantdb.find({} , (error , data) => {
    if(error){
      response.send(utils.createError(error))
    }else{

      const arrOfRestaurants = data.map((oneRestaurant) => {
          return {
            id : oneRestaurant._id,
            name : oneRestaurant.name,
            address : oneRestaurant.address,
            phone : oneRestaurant.phone,
            email : oneRestaurant.email,
            zipcode : oneRestaurant.zipcode,
            restaurant_thumbnail : oneRestaurant.restaurant_thumbnail,
            restaurant_rating : oneRestaurant.restaurant_rating,
            description : oneRestaurant.description
          }
      })
      
      response.send(utils.createData(arrOfRestaurants))
    }
  })
})

// Api for getting all the fooditems of a perticular restaurant

app.get('/fooditems/:restaurantname' , (request , response) => {
  restaurantdb.find({ name : request.params.restaurantname} , (error , data) => {
    if(error){
      response.send(utils.createError(error))
    }else{
      const arrOfFooditems = data[0].fooditems
      response.send(utils.createData(arrOfFooditems))
    }
  })
})

// Api for deleting a perticular restaurant by name

app.delete('/deleterestaurant/:restaurantname' , (request , response) => {
  restaurantdb.deleteOne({name : request.params.restaurantname} , (error , data) => {
    if(error){
      response.send(utils.createError(error))
    }else{
      response.send(utils.createData(data))
    }
  })
})

// Api for deleting a perticular food item from a restaurant by using name

app.delete('/deletefooditems/:restaurantname/:name' , (request , response) => {
  //const foodName = request.body.foodname

  restaurantdb.findOne({name : request.params.restaurantname} , (error , data) => {
    if(error){
      response.send(utils.createError(error))
    }else{
      
      data.fooditems.map((onefooditem) => {
        if(onefooditem.name == request.params.name){
          onefooditem.remove()
          
        }
      })
      data.save()
      response.send(utils.createData(data))
    }
  })

})

// Api for getting all restaurant information with food information

app.get('/getallrestaurantinfowithfooditems' , (request , response) => {
  restaurantdb.find({} , (error , data) => {

    if(error){
      response.send(utils.createError(error))
    }else{
      response.send(utils.createData(data))
    }

  })
})

// Api for updating the restaurant

app.put('/updaterestaurant/:restaurantname' , upload.single('restaurant_thumbnail') ,  (request , response) => {

  const filename = request.file.filename

  restaurantdb.findOneAndUpdate({ name : request.params.restaurantname } , 
    {
    name : request.body.name,
    address : request.body.address,
    phone : request.body.phone,
    email : request.body.email,
    zipcode : request.body.zipcode,
    restaurant_thumbnail : filename,
    restaurant_rating : request.body.restaurant_rating,
    description : request.body.description
    } , 
    { new: true } , ( error , data) => {
      if(error){
        response.send(utils.createError(error))
      }else{
        response.send(utils.createData(data))
      }
  })

})

// Api for getting all orders from order-service using restaurantname

app.get('/getallorders/:restaurantname' , (request , response) => {
  
  const RestaurantName = request.params.restaurantname

  Request.get('http://127.0.0.1:8500/restaurantorders/' + RestaurantName , (error , resp , data) => {

    if(error){
      response.send(utils.createError(error))
    }else{
      response.send(utils.createData(JSON.parse(data)))
    }

  })

})


app.listen(PORT, () => {
  console.log("restaurant-service started on port 8300...");
})


eurekaHelper.registerWithEureka('restaurant-service', PORT);