package com.sandeep.dto;

public class DietPlans {
	private String days;
	private String breakfast;
	private String lunch;
	private String dinner;
	private Long user_id;
	public DietPlans() {
		super();
	}


	public DietPlans(String days, String breakfast, String lunch, String dinner, Long user_id) {
		super();
		this.days = days;
		this.breakfast = breakfast;
		this.lunch = lunch;
		this.dinner = dinner;
		this.user_id = user_id;
	}


	public Long getUser_id() {
		return user_id;
	}


	public void setUser_id(Long user_id) {
		this.user_id = user_id;
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
	
	

}
