package com.saurabh.orderservice.entities;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "orders")
public class Orders {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int orderid;
	private String custname;
	private String restaurantname;
	private String cust_address;
	private float total_price;
	private int totalitems;

	@Column(name = "is_active")
	private int is_active = 1;
	private String status;

	@CreationTimestamp
	@Column(name = "created_timestamp", nullable = false, updatable = false, insertable = false)
	private Timestamp created_timestamp;
	private int deliveryid;

	@OneToMany(mappedBy = "orders", cascade = CascadeType.ALL)
	@JsonManagedReference
	private List<FoodItems> fooditems;

	public Orders() {
		this.fooditems = new ArrayList<FoodItems>();
	}

	public Orders(int orderid, String custname, String restaurantname, String cust_address, float total_price,
			int totalitems, int is_active, String status, Timestamp created_timestamp, int deliveryid,
			List<FoodItems> fooditems) {
		super();
		this.orderid = orderid;
		this.custname = custname;
		this.restaurantname = restaurantname;
		this.cust_address = cust_address;
		this.total_price = total_price;
		this.totalitems = totalitems;
		this.is_active = is_active;
		this.status = status;
		this.created_timestamp = created_timestamp;
		this.deliveryid = deliveryid;
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

	public float getTotal_price() {
		return total_price;
	}

	public void setTotal_price(float total_price) {
		this.total_price = total_price;
	}

	public int getTotalitems() {
		return totalitems;
	}

	public void setTotalitems(int totalitems) {
		this.totalitems = totalitems;
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

	public int getDeliveryid() {
		return deliveryid;
	}

	public void setDeliveryid(int deliveryid) {
		this.deliveryid = deliveryid;
	}

	public List<FoodItems> getFooditems() {
		return fooditems;
	}

	public void setFooditems(List<FoodItems> fooditems) {
		this.fooditems = fooditems;
	}

	@Override
	public String toString() {
		return "Orders [orderid=" + orderid + ", custname=" + custname + ", restaurantname=" + restaurantname
				+ ", cust_address=" + cust_address + ", total_price=" + total_price + ", totalitems=" + totalitems
				+ ", is_active=" + is_active + ", status=" + status + ", created_timestamp=" + created_timestamp
				+ ", deliveryid=" + deliveryid + ", fooditems=" + fooditems + "]";
	}

	public void addFoodItems(List<FoodItems> foodList) {

		for (FoodItems fooditem : foodList) {
			fooditem.setOrders(this);
			fooditems.add(fooditem);
		}
	}

}
