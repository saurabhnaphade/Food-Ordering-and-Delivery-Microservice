package com.saurabh.orderservice.entities;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "orders")
public class Orders {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int orderid;
	private String custname;
	private String menuname;
	private String restaurantname;
	private String cust_address;
	private int quantity;
	private float total_price;
	
	@Column(name="is_active")
	private int is_active = 1;
	private String status;

	@CreationTimestamp
	@Column(name = "created_timestamp", nullable = false, updatable = false, insertable = false)
	private Timestamp created_timestamp;

	public Orders() {
		// TODO Auto-generated constructor stub
	}

	public Orders(int orderid, String custname, String menuname, String restaurantname, String cust_address,
			int quantity, float total_price, int is_active, String status, Timestamp created_timestamp) {
		this.orderid = orderid;
		this.custname = custname;
		this.menuname = menuname;
		this.restaurantname = restaurantname;
		this.cust_address = cust_address;
		this.quantity = quantity;
		this.total_price = total_price;
		this.is_active = is_active;
		this.status = status;
		this.created_timestamp = created_timestamp;
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

	public String getMenuname() {
		return menuname;
	}

	public void setMenuname(String menuname) {
		this.menuname = menuname;
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

	public int getIs_active() {
		return is_active;
	}

	public void setIs_active(int isActive) {
		this.is_active = isActive;
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
		return "Orders [orderid=" + orderid + ", custname=" + custname + ", menuname=" + menuname + ", restaurantname="
				+ restaurantname + ", cust_address=" + cust_address + ", quantity=" + quantity + ", total_price="
				+ total_price + ", is_active=" + is_active + ", status=" + status + ", created_timestamp="
				+ created_timestamp + "]";
	}

}
