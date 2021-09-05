package com.saurabh.orderservice.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "fooditems")
public class FoodItems {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int fooditemid;
	private String menuname;
	private String restaurantname;
	private int quantity;
	private int priceperunit;
	
	@ManyToOne
	@JoinColumn(name = "orderid")
	@JsonBackReference
	private Orders orders;

	public FoodItems() {
		// TODO Auto-generated constructor stub
	}

	public Orders getOrders() {
		return orders;
	}

	public void setOrders(Orders orders) {
		this.orders = orders;
	}

	public FoodItems(int fooditemid, String menuname, String restaurantname, int quantity, int priceperunit) {
		this.fooditemid = fooditemid;
		this.menuname = menuname;
		this.restaurantname = restaurantname;
		this.quantity = quantity;
		this.priceperunit = priceperunit;
	}

	public int getFooditemid() {
		return fooditemid;
	}

	public void setFooditemid(int fooditemid) {
		this.fooditemid = fooditemid;
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

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getPriceperunit() {
		return priceperunit;
	}

	public void setPriceperunit(int priceperunit) {
		this.priceperunit = priceperunit;
	}

	@Override
	public String toString() {
		return "FoodItems [fooditemid=" + fooditemid + ", menuname=" + menuname + ", restaurantname=" + restaurantname
				+ ", quantity=" + quantity + ", priceperunit=" + priceperunit + "]";
	}

}
