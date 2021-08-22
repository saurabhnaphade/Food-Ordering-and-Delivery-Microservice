const mongoose = require('mongoose')


const restaurantschema = new mongoose.Schema({
     restaurant_id: Number,
     name: String,
     address: String,
     phone: Number,
     email: String,
     password: String,
     zipcode: Number,
     restaurant_thumbnail: String,
     restaurant_rating: Number,
     description: String,
     fooditems:[
        {
             fooditem_id: Number,
             category: String,
             name: String,
             priceperunit: Number,
             food_thumbnail: String,
             food_rating: Number,
            description: String
        }
     ]
})

const Restaurant = mongoose.model('Restaurant', restaurantschema);

module.exports = { Restaurant } 