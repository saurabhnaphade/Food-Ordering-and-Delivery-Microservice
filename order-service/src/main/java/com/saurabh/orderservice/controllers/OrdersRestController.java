package com.saurabh.orderservice.controllers;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.saurabh.orderservice.entities.FoodItems;
import com.saurabh.orderservice.entities.Orders;
import com.saurabh.orderservice.services.FoodItemsService;
import com.saurabh.orderservice.services.OrdersService;

@CrossOrigin
@RestController
public class OrdersRestController {

	@Autowired
	private OrdersService service;

	@Autowired
	private FoodItemsService foodService;

	@PostMapping("/placeorder")
	public ResponseEntity<?> placeOrder(@RequestBody Orders incomingorder) {

		Orders order = new Orders();
		order.setCustname(incomingorder.getCustname());
		order.setCust_address(incomingorder.getCust_address());
		order.setTotal_price(incomingorder.getTotal_price());
		order.setTotalitems(incomingorder.getTotalitems());
		order.setStatus(incomingorder.getStatus());

		order.addFoodItems(incomingorder.getFooditems());

		Orders orderplaced = service.save(order);

		HashMap<String, Object> map = new HashMap<>();

		if (orderplaced != null) {
			map.put("status", "success");
			map.put("data", orderplaced);
			ResponseEntity.status(HttpStatus.OK).build();
			return ResponseEntity.ok(map);
		} else {
			map.put("status", "error");
			map.put("data", "");
			ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			return ResponseEntity.ok(map);
		}
	}

	@GetMapping("/allorders")
	public ResponseEntity<?> findAllOrders() {
		List<Orders> ordersList = service.findAll();

		HashMap<String, Object> map = new HashMap<>();
		if (ordersList != null) {
			map.put("status", "success");
			map.put("data", ordersList);
			ResponseEntity.status(HttpStatus.OK).build();
			return ResponseEntity.ok(map);
		} else {
			map.put("status", "error");
			map.put("data", "");
			ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			return ResponseEntity.ok(map);
		}
	}

	@PutMapping("/markorderdelivered/{orderid}")
	public ResponseEntity<?> markAsDelivered(@PathVariable("orderid") int orderid) {
		Orders unmodifiedorder = service.findByOrderid(orderid);
		unmodifiedorder.setIs_active(0);
		Orders deliveredorder = service.save(unmodifiedorder);

		HashMap<String, Object> map = new HashMap<>();
		if (deliveredorder != null) {
			map.put("status", "success");
			map.put("data", deliveredorder);
			ResponseEntity.status(HttpStatus.OK).build();
			return ResponseEntity.ok(map);
		} else {
			map.put("status", "error");
			map.put("data", "");
			ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			return ResponseEntity.ok(map);
		}
	}

	@PutMapping("/updatestatus/{orderid}/{status}")
	public ResponseEntity<?> updateStatusOfOrder(@PathVariable("orderid") int orderid,
			@PathVariable("status") String status) {
		Orders unmodifiedorder = service.findByOrderid(orderid);
		unmodifiedorder.setStatus(status);
		Orders updatedorder = service.save(unmodifiedorder);

		HashMap<String, Object> map = new HashMap<>();
		if (updatedorder != null) {
			map.put("status", "success");
			map.put("data", updatedorder);
			ResponseEntity.status(HttpStatus.OK).build();
			return ResponseEntity.ok(map);
		} else {
			map.put("status", "error");
			map.put("data", "");
			ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			return ResponseEntity.ok(map);
		}
	}

	@GetMapping("/customerorders/{customername}")
	public Orders[] getCustomerOrders(@PathVariable("customername") String customername) {
		Orders[] ordersList = service.findByCustname(customername);
		return ordersList;
	}

	@GetMapping("/restaurantorders/{restaurantname}")
	public FoodItems[] getRestaurantOrders(@PathVariable("restaurantname") String restaurantname) {
		FoodItems[] fooditems = foodService.findByRestaurantname(restaurantname);
		return fooditems;
	}

}
