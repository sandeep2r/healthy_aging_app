package com.sandeep.service;

import java.util.List;

import com.sandeep.entities.MedicinePlan;

public interface MedicinePlanService {
    MedicinePlan createMedicinePlan(MedicinePlan medicinePlan);
    MedicinePlan getMedicinePlanById(Long id);
    List<MedicinePlan> getAllMedicinePlans();
    MedicinePlan updateMedicinePlan(Long id,MedicinePlan medicinePlan);
    void deleteMedicinePlan(Long id);
}
