package com.saurabh.orderservice.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saurabh.orderservice.daos.OrdersDao;
import com.saurabh.orderservice.entities.Orders;


@Service
public class OrdersServiceImpl implements OrdersService{
	
	@Autowired
	private OrdersDao dao;

	@Override
	public List<Orders> findAll() {
		return dao.findAll();
	}

	@Override
	public Orders save(Orders order) {
		return dao.save(order);
	}

	@Override
	public Orders[] findByCustname(String custname) {
		return dao.findByCustname(custname);
	}

	@Override
	public Orders[] findByRestaurantname(String restaurantname) {
		return dao.findByRestaurantname(restaurantname);
	}

	@Override
	public Orders findByOrderid(int orderid) {
		return dao.findByOrderid(orderid);
	}

}
