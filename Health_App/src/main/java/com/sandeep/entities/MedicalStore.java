package com.sandeep.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;

@Entity
@Table(name = "medical_stores")
public class MedicalStore {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "address")
	private String address;

	@Column(name = "contact")
	@Pattern(regexp = "\\d{10}", message = "Phone number should be 10 digits")
	private String contact;
	
	@ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

	public MedicalStore() {
		super();
	}

	public MedicalStore(Long id, String name, String address,
			@Pattern(regexp = "\\d{10}", message = "Phone number should be 10 digits") String contact, User user) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.contact = contact;
		this.user = user;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	
	

}
