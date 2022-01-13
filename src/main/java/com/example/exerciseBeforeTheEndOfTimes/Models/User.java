package com.example.exerciseBeforeTheEndOfTimes.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.format.annotation.NumberFormat;

@Entity
@Table(name = "users")
public class User {
	@Id
	@SequenceGenerator(name="seq",sequenceName="oracle_seq", allocationSize = 1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="seq")
	@Column(name = "USERID")
	private long id;
	@Column(name = "USERNAME")
	private String name;
	@NumberFormat
	@Column(name = "USERAGE")
	private int age;
	@Column(name = "USEREMAIL")
	private	String email;
	@Column(name = "USERPHONE")
	private String phone;
	@Column(name = "USERPASSWORD")
	private String password;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

}
