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

import com.sandeep.entities.MedicinePlan;
import com.sandeep.service.MedicinePlanService;

@RestController
@RequestMapping("/medicineplans")
public class MedicinePlanController {

    private final MedicinePlanService medicinePlanService;

    @Autowired
    public MedicinePlanController(MedicinePlanService medicinePlanService) {
        this.medicinePlanService = medicinePlanService;
    }

    @PostMapping("/save")
    public ResponseEntity<MedicinePlan> createMedicinePlan(@RequestBody MedicinePlan medicinePlan) {
        MedicinePlan createdMedicinePlan = medicinePlanService.createMedicinePlan(medicinePlan);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdMedicinePlan);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MedicinePlan> getMedicinePlanById(@PathVariable Long id) {
        MedicinePlan medicinePlan = medicinePlanService.getMedicinePlanById(id);
        return ResponseEntity.ok(medicinePlan);
    }

    @GetMapping("/list")
    public ResponseEntity<List<MedicinePlan>> getAllMedicinePlans() {
        List<MedicinePlan> medicinePlans = medicinePlanService.getAllMedicinePlans();
        return ResponseEntity.ok(medicinePlans);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MedicinePlan> updateMedicinePlan(@PathVariable Long id, @RequestBody MedicinePlan medicinePlan) {
        
        MedicinePlan updatedMedicinePlan = medicinePlanService.updateMedicinePlan(id,medicinePlan);
        return ResponseEntity.ok(updatedMedicinePlan);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMedicinePlan(@PathVariable Long id) {
        medicinePlanService.deleteMedicinePlan(id);
        return ResponseEntity.noContent().build();
    }
}
