package com.sandeep.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "medicine_plans")
public class MedicinePlan {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "days")
	private String days;

	@Column(name = "breakfast")
	private String breakfast;

	@Column(name = "lunch")
	private String lunch;

	@Column(name = "dinner")
	private String dinner;
	
	@ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

	public MedicinePlan() {
		super();
	}

	public MedicinePlan(Long id, String days, String breakfast, String lunch, String dinner, User user) {
		super();
		this.id = id;
		this.days = days;
		this.breakfast = breakfast;
		this.lunch = lunch;
		this.dinner = dinner;
		this.user = user;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDays() {
		return days;
	}

	public void setDays(String days) {
		this.days = days;
	}

	public String getBreakfast() {
		return breakfast;
	}

	public void setBreakfast(String breakfast) {
		this.breakfast = breakfast;
	}

	public String getLunch() {
		return lunch;
	}

	public void setLunch(String lunch) {
		this.lunch = lunch;
	}

	public String getDinner() {
		return dinner;
	}

	public void setDinner(String dinner) {
		this.dinner = dinner;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	
}
