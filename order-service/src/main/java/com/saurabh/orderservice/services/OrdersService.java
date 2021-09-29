package com.saurabh.orderservice.services;

import java.util.List;

import com.saurabh.orderservice.entities.Orders;

public interface OrdersService {

	Orders findByOrderid(int orderid);
	
	Orders[] findByDeliveryid(int deliveryid);

	List<Orders> findAll();

	Orders save(Orders order);

	Orders[] findByCustname(String custname);
	
	Orders[] findByRestaurantname(String restaurantname);

}
