package com.saurabh.paymentservice.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "payment")
public class Payment {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int paymentid;
	private String name;
	private String cardnumber;
	private String expirydate;
	private int cvv;
	private int orderid;

	public Payment() {
		// TODO Auto-generated constructor stub
	}

	public int getPaymentid() {
		return paymentid;
	}

	public void setPaymentid(int paymentid) {
		this.paymentid = paymentid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCardnumber() {
		return cardnumber;
	}

	public void setCardnumber(String cardnumber) {
		this.cardnumber = cardnumber;
	}

	public String getExpirydate() {
		return expirydate;
	}

	public void setExpirydate(String expirydate) {
		this.expirydate = expirydate;
	}

	public int getCvv() {
		return cvv;
	}

	public void setCvv(int cvv) {
		this.cvv = cvv;
	}

	public int getOrderid() {
		return orderid;
	}

	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}

	@Override
	public String toString() {
		return "Payment [paymentid=" + paymentid + ", name=" + name + ", cardnumber=" + cardnumber + ", expirydate="
				+ expirydate + ", cvv=" + cvv + ", orderid=" + orderid + "]";
	}

}
