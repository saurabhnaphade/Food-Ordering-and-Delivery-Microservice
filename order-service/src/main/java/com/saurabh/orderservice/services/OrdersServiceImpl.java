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

}
