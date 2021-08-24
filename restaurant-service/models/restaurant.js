const mongoose = require('mongoose')


const restaurantschema = new mongoose.Schema({
     name: String,
     address: String,
     phone: Number,
     email: String,
     password: String,
     zipcode: Number,
     restaurant_thumbnail: String,
     restaurant_rating: {
       type : Number,
       default : 0
     },
     description: String,
     fooditems:[
        {
          name: String,  
          category: String,             
          priceperunit: Number,
          food_thumbnail: String,
          food_rating: {
            type : Number,
            default : 0
          },
          description: String
        }
     ]
})

const Restaurant = mongoose.model('Restaurant', restaurantschema);

module.exports = Restaurant 