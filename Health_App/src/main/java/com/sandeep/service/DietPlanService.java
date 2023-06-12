package com.sandeep.service;

import java.util.List;

import com.sandeep.entities.DietPlan;

public interface DietPlanService {
    DietPlan createDietPlan(DietPlan dietPlan);
    DietPlan getDietPlanById(Long id);
    List<DietPlan> getAllDietPlans();
    DietPlan updateDietPlan(Long id,DietPlan dietPlan);
    void deleteDietPlan(Long id);
}
