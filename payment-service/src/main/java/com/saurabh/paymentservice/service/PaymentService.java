package com.saurabh.paymentservice.service;

import com.saurabh.paymentservice.entities.Payment;

public interface PaymentService {
	
	Payment save(Payment payment);
	
	Payment findByOrderid(int id);

}
