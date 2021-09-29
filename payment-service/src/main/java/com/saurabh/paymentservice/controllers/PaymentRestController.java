package com.saurabh.paymentservice.controllers;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.saurabh.paymentservice.entities.Payment;
import com.saurabh.paymentservice.service.PaymentService;

@CrossOrigin
@RestController
public class PaymentRestController {
	
	@Autowired
	private PaymentService service;
	
	@PostMapping("/savepayment")
	public ResponseEntity<?> savePayment(@RequestBody Payment payment){
		
		Payment confirmedpayment = service.save(payment);
		
		HashMap<String, Object> map = new HashMap<>();

		if (confirmedpayment != null) {
			map.put("status", "success");
			map.put("data", confirmedpayment);
			ResponseEntity.status(HttpStatus.OK).build();
			return ResponseEntity.ok(map);
		} else {
			map.put("status", "error");
			map.put("data", "");
			ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			return ResponseEntity.ok(map);
		}
		
	}
	
	@GetMapping("/payment/{orderid}")
	public ResponseEntity<?> findByPaymentId(@PathVariable("orderid") int orderid){
		
		Payment paymentorder = service.findByOrderid(orderid);
		
		HashMap<String, Object> map = new HashMap<>();

		if (paymentorder != null) {
			map.put("status", "success");
			map.put("data", paymentorder);
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
