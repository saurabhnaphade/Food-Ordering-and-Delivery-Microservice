package com.saurabh.orderservice.models;

import java.util.List;

import com.saurabh.orderservice.entities.FoodItems;

public class OrderRequest {

	private String custname;
	private String cust_address;
	private float total_price;
	private String status;
	private List<FoodItems> fooditems;

	public OrderRequest() {
		// TODO Auto-generated constructor stub
	}

	public OrderRequest(String custname, String cust_address, float total_price, String status,
			List<FoodItems> fooditems) {
		this.custname = custname;
		this.cust_address = cust_address;
		this.total_price = total_price;
		this.status = status;
		this.fooditems = fooditems;
	}

	public String getCustname() {
		return custname;
	}

	public void setCustname(String custname) {
		this.custname = custname;
	}

	public String getCust_address() {
		return cust_address;
	}

	public void setCust_address(String cust_address) {
		this.cust_address = cust_address;
	}

	public float getTotal_price() {
		return total_price;
	}

	public void setTotal_price(float total_price) {
		this.total_price = total_price;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<FoodItems> getFooditems() {
		return fooditems;
	}

	public void setFooditems(List<FoodItems> fooditems) {
		this.fooditems = fooditems;
	}

	@Override
	public String toString() {
		return "OrderRequest [custname=" + custname + ", cust_address=" + cust_address + ", total_price=" + total_price
				+ ", status=" + status + ", fooditems=" + fooditems + "]";
	}

}
