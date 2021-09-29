package com.saurabh.customerservice.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saurabh.customerservice.entities.*;

public interface CustomerDao extends JpaRepository<Customer, Integer>{
	
	void deleteByEmail(String email);

	Customer findByEmail(String email);

}
