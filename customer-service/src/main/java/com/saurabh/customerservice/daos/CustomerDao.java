package com.saurabh.customerservice.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saurabh.customerservice.entities.Customer;

public interface CustomerDao extends JpaRepository<Customer, Integer> {

	Customer findByEmail(String email);
	
	void deleteByEmail(String email);
	

}
