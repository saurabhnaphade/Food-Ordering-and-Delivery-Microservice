package com.saurabh.deliveryservice.dtos;

public class DeliveryboyDTO {

	private int deliveryboy_id;
	private String fname;
	private String lname;
	private long phone;
	private String email;
	private String password;
	private String address;
	private String zipcode;
	private int order_id;

	public DeliveryboyDTO() {
		// TODO Auto-generated constructor stub
	}

	public DeliveryboyDTO(int deliveryboy_id, String fname, String lname, long phone, String email, String password,
			String address, String zipcode, int order_id) {
		super();
		this.deliveryboy_id = deliveryboy_id;
		this.fname = fname;
		this.lname = lname;
		this.phone = phone;
		this.email = email;
		this.password = password;
		this.address = address;
		this.zipcode = zipcode;
		this.order_id = order_id;
	}

	public int getDeliveryboy_id() {
		return deliveryboy_id;
	}

	public void setDeliveryboy_id(int deliveryboy_id) {
		this.deliveryboy_id = deliveryboy_id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public int getOrder_id() {
		return order_id;
	}

	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}

	@Override
	public String toString() {
		return "DeliveryboyDTO [deliveryboy_id=" + deliveryboy_id + ", fname=" + fname + ", lname=" + lname + ", phone="
				+ phone + ", email=" + email + ", password=" + password + ", address=" + address + ", zipcode="
				+ zipcode + ", order_id=" + order_id + "]";
	}

}
