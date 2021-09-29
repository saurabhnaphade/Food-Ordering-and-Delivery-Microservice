package com.saurabh.deliveryservice.services;

import java.util.List;

import com.saurabh.deliveryservice.entities.Deliveryboy;

public interface DeliveryboyService {

	Deliveryboy findByEmail(String email);

	Deliveryboy save(Deliveryboy deliveryboy);

	Deliveryboy authenticate(String email, String password);

	Deliveryboy findById(int id);

	List<Deliveryboy> findAll();
	
	void deleteById(Integer id);
	
	void deleteByEmail(String email);

}
