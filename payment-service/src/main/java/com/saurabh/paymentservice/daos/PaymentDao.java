package com.saurabh.paymentservice.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saurabh.paymentservice.entities.Payment;

public interface PaymentDao extends JpaRepository<Payment, Integer>{
	
	Payment findByPaymentid(int id);
	
	Payment findByOrderid(int id);

}
