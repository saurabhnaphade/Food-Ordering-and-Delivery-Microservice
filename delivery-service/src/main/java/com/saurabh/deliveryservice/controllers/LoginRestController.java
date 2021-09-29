package com.saurabh.deliveryservice.controllers;

import java.util.Base64;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.saurabh.deliveryservice.entities.Deliveryboy;
import com.saurabh.deliveryservice.models.Credentials;
import com.saurabh.deliveryservice.services.DeliveryboyService;

@CrossOrigin
@RestController
@RequestMapping("/auth")
public class LoginRestController {

	@Autowired
	private DeliveryboyService service;

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(Deliveryboy deliveryboy) {
		String password = deliveryboy.getPassword();
		String encodedPassword = Base64.getEncoder().encodeToString(password.getBytes());
		deliveryboy.setPassword(encodedPassword);
		Deliveryboy deliveryBoy = service.save(deliveryboy);

		HashMap<String, Object> map = new HashMap<>();
		if (deliveryBoy == null) {
			map.put("status", "error");
			map.put("data", "");
			ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();
			return ResponseEntity.ok(map);
		} else {
			map.put("status", "success");
			map.put("data", deliveryBoy);
			return ResponseEntity.ok(map);
		}
	}

	@PostMapping("/signin")
	public ResponseEntity<?> signIn( Credentials cred) {
		Deliveryboy deliveryBoy = service.findByEmail(cred.getEmail());
		byte[] decodedBytes = Base64.getDecoder().decode(deliveryBoy.getPassword());
		String decodedString = new String(decodedBytes);
		deliveryBoy.setPassword(decodedString);

		HashMap<String, Object> map = new HashMap<>();
		if (deliveryBoy.getPassword().equals(cred.getPassword())) {
			map.put("status", "success");
			map.put("data", deliveryBoy);
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
