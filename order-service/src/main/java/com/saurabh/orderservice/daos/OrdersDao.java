package com.saurabh.orderservice.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saurabh.orderservice.entities.Orders;

public interface OrdersDao extends JpaRepository<Orders, Integer>{
	
}