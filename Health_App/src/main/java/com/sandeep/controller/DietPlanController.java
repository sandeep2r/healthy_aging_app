package com.sandeep.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sandeep.entities.DietPlan;
import com.sandeep.service.DietPlanService;

@RestController
@RequestMapping("/dietplans")
public class DietPlanController {

    private final DietPlanService dietPlanService;

    @Autowired
    public DietPlanController(DietPlanService dietPlanService) {
        this.dietPlanService = dietPlanService;
    }

    @PostMapping("/save")
    public ResponseEntity<DietPlan> createDietPlan(@RequestBody DietPlan dietPlan) {
        DietPlan createdDietPlan = dietPlanService.createDietPlan(dietPlan);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDietPlan);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DietPlan> getDietPlanById(@PathVariable Long id) {
        DietPlan dietPlan = dietPlanService.getDietPlanById(id);
        return ResponseEntity.ok(dietPlan);
    }

    @GetMapping("/list")
    public ResponseEntity<List<DietPlan>> getAllDietPlans() {
        List<DietPlan> dietPlans = dietPlanService.getAllDietPlans();
        return ResponseEntity.ok(dietPlans);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<DietPlan> updateDietPlan(@PathVariable Long id, @RequestBody DietPlan dietPlan) {
    	
        DietPlan updatedDietPlan = dietPlanService.updateDietPlan(id,dietPlan);
        return ResponseEntity.ok(updatedDietPlan);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteDietPlan(@PathVariable Long id) {
        dietPlanService.deleteDietPlan(id);
        return ResponseEntity.noContent().build();
    }
}
