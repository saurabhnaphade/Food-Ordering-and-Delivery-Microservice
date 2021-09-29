package com.saurabh.orderservice.services;

import com.saurabh.orderservice.entities.FoodItems;

public interface FoodItemsService {
	
	FoodItems save(FoodItems fooditem);
	
	//FoodItems[] findByRestaurantname(String restaurantname);

}
