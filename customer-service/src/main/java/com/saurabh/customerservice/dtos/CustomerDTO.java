package com.saurabh.customerservice.dtos;

import org.springframework.beans.BeanUtils;

import com.saurabh.customerservice.entities.Customer;

public class CustomerDTO {
	private int cust_id;
	private String fname;
	private String lname;
	private long phone;
	private String email;
	private String password;
	private String address;
	private int zipcode;
	private String role;

	public CustomerDTO() {
	}

	public CustomerDTO(int cust_id, String fname, String lname, long phone, String email, String password,
			String address, int zipcode, String role) {
		super();
		this.cust_id = cust_id;
		this.fname = fname;
		this.lname = lname;
		this.phone = phone;
		this.email = email;
		this.password = password;
		this.address = address;
		this.zipcode = zipcode;
		this.role = role;
	}

	public int getCust_id() {
		return cust_id;
	}

	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
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

	public int getZipcode() {
		return zipcode;
	}

	public void setZipcode(int zipcode) {
		this.zipcode = zipcode;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	// called from get
	public static CustomerDTO fromEntity(Customer cust) {
		CustomerDTO custDTO = new CustomerDTO();
		BeanUtils.copyProperties(cust, custDTO);
		return custDTO;
	}

	// called from POST, PUT
	public static Customer toEntity(CustomerDTO custDTO) {
		Customer cust = new Customer();
		BeanUtils.copyProperties(custDTO, cust);
		return cust;
	}

	@Override
	public String toString() {
		return "CustomerDTO [cust_id=" + cust_id + ", fname=" + fname + ", lname=" + lname + ", phone=" + phone
				+ ", email=" + email + ", password=" + password + ", address=" + address + ", zipcode=" + zipcode
				+ ", role=" + role + "]";
	}

}
