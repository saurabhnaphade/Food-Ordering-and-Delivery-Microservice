package com.saurabh.customerservice.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saurabh.customerservice.daos.*;
import com.saurabh.customerservice.entities.*;

@Transactional
@Service
public class CustomerServiceImpl implements CustomerService{
	
	@Autowired
	private CustomerDao Dao;

	@Override
	public Customer findByEmail(String email) {
		return Dao.findByEmail(email);
	}

	@Override
	public Customer save(Customer customer) {
		return Dao.save(customer);
	}

	@Override
	public Customer authenticate(String email, String password) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Customer findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Customer> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteByEmail(String email) {
		Dao.deleteByEmail(email);
	}

}
