package com.saurabh.paymentservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.saurabh.paymentservice.daos.PaymentDao;
import com.saurabh.paymentservice.entities.Payment;


@Service
public class PaymentServiceImpl implements PaymentService{
	
	@Autowired
	private PaymentDao dao;

	@Override
	public Payment save(Payment payment) {
		return dao.save(payment);
	}

	@Override
	public Payment findByOrderid(int id) {
		return dao.findByOrderid(id);
	}

}
