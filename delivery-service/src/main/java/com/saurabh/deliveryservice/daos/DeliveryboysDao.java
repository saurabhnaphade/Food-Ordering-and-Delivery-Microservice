package com.saurabh.deliveryservice.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saurabh.deliveryservice.entities.Deliveryboy;

public interface DeliveryboysDao extends JpaRepository<Deliveryboy, Integer> {

	Deliveryboy findByEmail(String email);

	Deliveryboy findByFname(String fname);
	
}