package com.saurabh.customerservice.controllers;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.saurabh.customerservice.entities.Customer;
import com.saurabh.customerservice.services.CustomerService;

@CrossOrigin
@RestController
public class TestRestController {
	
	@Autowired
	private CustomerService service;
	
	@GetMapping("/test/email/{email}")
	public Customer findByEmail(@PathVariable("email") String email) {
		return service.findByEmail(email);
	}
	
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
