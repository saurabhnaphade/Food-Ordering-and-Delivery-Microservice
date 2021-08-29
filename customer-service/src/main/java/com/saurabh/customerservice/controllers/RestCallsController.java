package com.saurabh.customerservice.controllers;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.saurabh.customerservice.dtos.CustomerOrdersDTO;


@CrossOrigin
@RestController
public class RestCallsController {
	
	@Autowired
	private RestTemplate restTemplate;
	
	@GetMapping("/getallorders/{custname}")
	public ResponseEntity<?> getAllCustomerOrders(@PathVariable("custname") String custname){
		String CustomerName = custname;
		ResponseEntity<CustomerOrdersDTO[]> response = restTemplate.getForEntity("http://127.0.0.1:8500/customerorders/" + CustomerName, CustomerOrdersDTO[].class);
		CustomerOrdersDTO[] orders = response.getBody();
		
		HashMap<String, Object> map = new HashMap<>();
		if (orders != null) {
			map.put("status", "success");
			map.put("data", orders);
			ResponseEntity.status(HttpStatus.OK).build();
			return ResponseEntity.ok(map);
		} else {
			map.put("status", "error");
			map.put("data", "");
			ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			return ResponseEntity.ok(map);
		}
	}

}
