package com.saurabh.deliveryservice.controllers;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.saurabh.deliveryservice.entities.Deliveryboy;
import com.saurabh.deliveryservice.services.DeliveryboyService;


@CrossOrigin
@RestController
public class DeliveryBoyController {
	
	@Autowired
	private DeliveryboyService service;
	
	@GetMapping("/alldeliveryboys")
	public ResponseEntity<?> findAllDeliveryBoys(){
	 	List<Deliveryboy> deliveryBoys = service.findAll();
	 	
	 	HashMap<String, Object> map = new HashMap<>();
		if (deliveryBoys != null) {
			map.put("status", "success");
			map.put("data", deliveryBoys);
			ResponseEntity.status(HttpStatus.OK).build();
			return ResponseEntity.ok(map);
		} else {
			map.put("status", "error");
			map.put("data", "");
			ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			return ResponseEntity.ok(map);
		}
		
	}
	
	@DeleteMapping("/delete/{email}")
	public ResponseEntity<?> deleteDeliveryBoy(@PathVariable("email") String email){
		Deliveryboy delivery = service.findByEmail(email);
		service.deleteById(delivery.getDeliveryboy_id());
		HashMap<String, Object> map = new HashMap<>();
		map.put("status", "success");
		map.put("data", "Deleted Successfully");
		return ResponseEntity.ok(map);
		
	}

}
