package com.saurabh.orderservice.dtos;

import java.sql.Timestamp;

public class CustomerOrderDTO {

	private int order_id;
	private String menu_name;
	private String restaurant_name;
	private String cust_address;
	private int quantity;
	private float total_price;
	private int isActive;
	private String status;
	private Timestamp created_timestamp;

	public CustomerOrderDTO() {
	}

	public CustomerOrderDTO(int order_id, String menu_name, String restaurant_name, String cust_address, int quantity,
			float total_price, int isActive, String status, Timestamp created_timestamp) {
		this.order_id = order_id;
		this.menu_name = menu_name;
		this.restaurant_name = restaurant_name;
		this.cust_address = cust_address;
		this.quantity = quantity;
		this.total_price = total_price;
		this.isActive = isActive;
		this.status = status;
		this.created_timestamp = created_timestamp;
	}

	public int getOrder_id() {
		return order_id;
	}

	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}

	public String getMenu_name() {
		return menu_name;
	}

	public void setMenu_name(String menu_name) {
		this.menu_name = menu_name;
	}

	public String getRestaurant_name() {
		return restaurant_name;
	}

	public void setRestaurant_name(String restaurant_name) {
		this.restaurant_name = restaurant_name;
	}

	public String getCust_address() {
		return cust_address;
	}

	public void setCust_address(String cust_address) {
		this.cust_address = cust_address;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public float getTotal_price() {
		return total_price;
	}

	public void setTotal_price(float total_price) {
		this.total_price = total_price;
	}

	public int getIsActive() {
		return isActive;
	}

	public void setIsActive(int isActive) {
		this.isActive = isActive;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Timestamp getCreated_timestamp() {
		return created_timestamp;
	}

	public void setCreated_timestamp(Timestamp created_timestamp) {
		this.created_timestamp = created_timestamp;
	}

	@Override
	public String toString() {
		return "CustomerOrderDTO [order_id=" + order_id + ", menu_name=" + menu_name + ", restaurant_name="
				+ restaurant_name + ", cust_address=" + cust_address + ", quantity=" + quantity + ", total_price="
				+ total_price + ", isActive=" + isActive + ", status=" + status + ", created_timestamp="
				+ created_timestamp + "]";
	}

}
