package com.sandeep.dto;



public class MedicinePlans {
    private String days;
    private String morningDose;
    private String afternoonDose;
    private String eveningDose;
    private Long user_id;

    public MedicinePlans() {
        super();
    }

    public MedicinePlans(String days, String morningDose, String afternoonDose, String eveningDose, Long user_id) {
        super();
        this.days = days;
        this.morningDose = morningDose;
        this.afternoonDose = afternoonDose;
        this.eveningDose = eveningDose;
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

    public String getMorningDose() {
        return morningDose;
    }

    public void setMorningDose(String morningDose) {
        this.morningDose = morningDose;
    }

    public String getAfternoonDose() {
        return afternoonDose;
    }

    public void setAfternoonDose(String afternoonDose) {
        this.afternoonDose = afternoonDose;
    }

    public String getEveningDose() {
        return eveningDose;
    }

    public void setEveningDose(String eveningDose) {
        this.eveningDose = eveningDose;
    }
}
