package com.saurabh.customerservice.models;

public class ChangePassword {
	private String email;
	private String password;
	private String security;
	
	public ChangePassword() {
		// TODO Auto-generated constructor stub
	}

	public ChangePassword(String email, String password, String security) {
		this.email = email;
		this.password = password;
		this.security = security;
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

	public String getSecurity() {
		return security;
	}

	public void setSecurity(String security) {
		this.security = security;
	}

	@Override
	public String toString() {
		return "ChangePassword [email=" + email + ", password=" + password + ", security=" + security + "]";
	}
	
	
}
