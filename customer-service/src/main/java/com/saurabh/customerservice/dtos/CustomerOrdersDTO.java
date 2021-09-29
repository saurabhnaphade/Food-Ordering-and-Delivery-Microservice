package com.saurabh.customerservice.dtos;

import java.sql.Timestamp;
import java.util.List;

public class CustomerOrdersDTO {

	private int orderid;
	private String custname;
	private String restaurantname;
	private String cust_address;
	private int totalitems;
	private float total_price;
	private int is_active;
	private String status;
	private Timestamp created_timestamp;

	private List<FoodItemsDTO> fooditems;

	public CustomerOrdersDTO() {
		// TODO Auto-generated constructor stub
	}

	public CustomerOrdersDTO(int orderid, String custname, String restaurantname, String cust_address, int totalitems,
			float total_price, int is_active, String status, Timestamp created_timestamp,
			List<FoodItemsDTO> fooditems) {
		super();
		this.orderid = orderid;
		this.custname = custname;
		this.restaurantname = restaurantname;
		this.cust_address = cust_address;
		this.totalitems = totalitems;
		this.total_price = total_price;
		this.is_active = is_active;
		this.status = status;
		this.created_timestamp = created_timestamp;
		this.fooditems = fooditems;
	}

	public int getOrderid() {
		return orderid;
	}

	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}

	public String getCustname() {
		return custname;
	}

	public void setCustname(String custname) {
		this.custname = custname;
	}

	public String getRestaurantname() {
		return restaurantname;
	}

	public void setRestaurantname(String restaurantname) {
		this.restaurantname = restaurantname;
	}

	public String getCust_address() {
		return cust_address;
	}

	public void setCust_address(String cust_address) {
		this.cust_address = cust_address;
	}

	public int getTotalitems() {
		return totalitems;
	}

	public void setTotalitems(int totalitems) {
		this.totalitems = totalitems;
	}

	public float getTotal_price() {
		return total_price;
	}

	public void setTotal_price(float total_price) {
		this.total_price = total_price;
	}

	public int getIs_active() {
		return is_active;
	}

	public void setIs_active(int is_active) {
		this.is_active = is_active;
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

	public List<FoodItemsDTO> getFooditems() {
		return fooditems;
	}

	public void setFooditems(List<FoodItemsDTO> fooditems) {
		this.fooditems = fooditems;
	}

	@Override
	public String toString() {
		return "CustomerOrdersDTO [orderid=" + orderid + ", custname=" + custname + ", restaurantname=" + restaurantname
				+ ", cust_address=" + cust_address + ", totalitems=" + totalitems + ", total_price=" + total_price
				+ ", is_active=" + is_active + ", status=" + status + ", created_timestamp=" + created_timestamp
				+ ", fooditems=" + fooditems + "]";
	}

}
