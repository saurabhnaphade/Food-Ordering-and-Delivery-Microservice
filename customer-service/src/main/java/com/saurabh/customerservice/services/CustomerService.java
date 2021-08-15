package com.saurabh.customerservice.services;

import java.util.List;

import com.saurabh.customerservice.entities.Customer;

public interface CustomerService {

	Customer findByEmail(String email);

	Customer save(Customer user);

	Customer authenticate(String email, String password);

	Customer findById(int id);

	List<Customer> findAll();

}