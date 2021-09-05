package com.saurabh.customerservice.controllers;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


import com.saurabh.customerservice.services.CustomerService;

@RestController
public class CustomerRestController {
	
	@Autowired
	private CustomerService service;
	
	@DeleteMapping("/deletecustomer/{email}")
	public ResponseEntity<?> deleteCustomer(@PathVariable("email") String email){
		service.deleteByEmail(email);
		
		HashMap<String, Object> map = new HashMap<>();
		map.put("status", "success");
		map.put("data", "Customer Deleted Successfully");
		ResponseEntity.status(HttpStatus.OK).build();
		return ResponseEntity.ok(map);
		
	}

}
