package com.saurabh.orderservice.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saurabh.orderservice.daos.FoodItemsDao;
import com.saurabh.orderservice.entities.FoodItems;

@Transactional
@Service
public class FoodOrderServiceImpl implements FoodItemsService{

	@Autowired
	private FoodItemsDao dao;

	@Override
	public FoodItems save(FoodItems fooditem) {
		return dao.save(fooditem);
	}

	@Override
	public FoodItems[] findByRestaurantname(String restaurantname) {
		return dao.findByRestaurantname(restaurantname);
	}
}
