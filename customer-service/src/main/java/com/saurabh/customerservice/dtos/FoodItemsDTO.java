package com.saurabh.customerservice.dtos;

public class FoodItemsDTO {

	private String menuname;
	// private String restaurantname;
	private String quantity;
	private int priceperunit;

	public FoodItemsDTO() {
		// TODO Auto-generated constructor stub
	}

	public FoodItemsDTO(String menuname, String quantity, int priceperunit) {
		super();
		this.menuname = menuname;
		this.quantity = quantity;
		this.priceperunit = priceperunit;
	}

	public String getMenuname() {
		return menuname;
	}

	public void setMenuname(String menuname) {
		this.menuname = menuname;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
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
		return "FoodItemsDTO [menuname=" + menuname + ", quantity=" + quantity + ", priceperunit=" + priceperunit + "]";
	}

}
