package com.saurabh.customerservice.controllers;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.saurabh.customerservice.entities.Customer;
import com.saurabh.customerservice.models.ChangePassword;
import com.saurabh.customerservice.models.Credentials;
import com.saurabh.customerservice.models.UpdateCustomer;
import com.saurabh.customerservice.services.CustomerService;


@CrossOrigin 
@RestController
@RequestMapping("/auth")
public class AuthenticationController {
	
	@Autowired
	private CustomerService service;
	
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(Customer customer){
		Customer cust = service.save(customer);
		HashMap<String, Object> map = new HashMap<>();
		if(cust == null) {
			map.put("status", "error");
			map.put("data", "");
			ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();
			return ResponseEntity.ok(map);
		}else {
			map.put("status", "success");
			map.put("data", cust);
			return ResponseEntity.ok(map);
		}
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> signIn(Credentials cred){
		Customer customer = service.findByEmail(cred.getEmail());
		HashMap<String, Object> map = new HashMap<>();
		if(customer.getPassword().equals(cred.getPassword())) {
			map.put("status", "success");
			map.put("data", customer);
			ResponseEntity.status(HttpStatus.OK).build();
			return ResponseEntity.ok(map);
		}else {
			map.put("status", "error");
			map.put("data", "");
			ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			return ResponseEntity.ok(map);
		}
	}
	@PostMapping("/changepassword")
	public ResponseEntity<?> update(ChangePassword cred){
		Customer customer = service.findByEmail(cred.getEmail());
		HashMap<String, Object> map = new HashMap<>();
		if(customer.getSecurity().equals(cred.getSecurity())) {
			map.put("status", "success");
			map.put("data", customer);
			customer.setPassword(cred.getPassword());
			service.save(customer);
			ResponseEntity.status(HttpStatus.OK).build();
			return ResponseEntity.ok(map);
		}else {
			map.put("status", "error");
			map.put("data", "");
			ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			return ResponseEntity.ok(map);
		}
	}

	
	@PostMapping("/edit")
	public ResponseEntity<?> edit(UpdateCustomer cred){
		Customer customer = service.findByEmail(cred.getEmail());
		HashMap<String, Object> map = new HashMap<>();
		    map.put("status", "success");
			map.put("data", customer);
			customer.setPassword(cred.getPassword());
			customer.setFname(cred.getFname());
			customer.setLname(cred.getLname());
			customer.setAddress(cred.getAddress());
			customer.setPhone(cred.getPhone());
			customer.setZipcode(cred.getZipcode());
			customer.setSecurity(cred.getSecurity());
			service.save(customer);
			ResponseEntity.status(HttpStatus.OK).build();
			return ResponseEntity.ok(map);
		
		}
	}

