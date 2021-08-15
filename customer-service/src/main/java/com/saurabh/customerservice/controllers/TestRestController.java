package com.saurabh.customerservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.saurabh.customerservice.entities.Customer;
import com.saurabh.customerservice.services.CustomerService;



@RestController
public class TestRestController {
	
	@Autowired
	private CustomerService service;
	
	@GetMapping("/test/email/{email}")
	public Customer findByEmail(@PathVariable("email") String email) {
		return service.findByEmail(email);
	}

}
