package com.sandeep.entities;

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

@Entity
@Table(name = "users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "username")
	private String username;

	@Column(name = "password")
	private String password;

	@Column(name = "role")
	private String role;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	private List<DietPlan> dietPlans = new ArrayList<>();

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	private List<MedicinePlan> medicinePlans = new ArrayList<>();

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Hospital> hospitals = new ArrayList<>();
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	private List<MedicalStore> medicalStores = new ArrayList<>();

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	private List<EmergencyContact> emergencyContacts = new ArrayList<>();

	public User() {
		super();
	}

	public User(String username, String password, String role) {
		this.username = username;
		this.password = password;
		this.role = role;
	}

	public User(Long id, String username, String password, String role, List<DietPlan> dietPlans,
			List<MedicinePlan> medicinePlans, List<Hospital> hospitals, List<MedicalStore> medicalStores,
			List<EmergencyContact> emergencyContacts) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.role = role;
		this.dietPlans = dietPlans;
		this.medicinePlans = medicinePlans;
		this.hospitals = hospitals;
		this.medicalStores = medicalStores;
		this.emergencyContacts = emergencyContacts;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public List<DietPlan> getDietPlans() {
		return dietPlans;
	}

	public void setDietPlans(List<DietPlan> dietPlans) {
		this.dietPlans = dietPlans;
	}

	public List<MedicinePlan> getMedicinePlans() {
		return medicinePlans;
	}

	public void setMedicinePlans(List<MedicinePlan> medicinePlans) {
		this.medicinePlans = medicinePlans;
	}

	public List<Hospital> getHospitals() {
		return hospitals;
	}

	public void setHospitals(List<Hospital> hospitals) {
		this.hospitals = hospitals;
	}

	public List<MedicalStore> getMedicalStores() {
		return medicalStores;
	}

	public void setMedicalStores(List<MedicalStore> medicalStores) {
		this.medicalStores = medicalStores;
	}

	public List<EmergencyContact> getEmergencyContacts() {
		return emergencyContacts;
	}

	public void setEmergencyContacts(List<EmergencyContact> emergencyContacts) {
		this.emergencyContacts = emergencyContacts;
	}

}
