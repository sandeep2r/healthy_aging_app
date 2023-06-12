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

import com.sandeep.entities.MedicalStore;
import com.sandeep.service.MedicalStoreService;

@RestController
@RequestMapping("/api/medicalstores")
public class MedicalStoreController {

    private final MedicalStoreService medicalStoreService;

    @Autowired
    public MedicalStoreController(MedicalStoreService medicalStoreService) {
        this.medicalStoreService = medicalStoreService;
    }

    @PostMapping
    public ResponseEntity<MedicalStore> createMedicalStore(@RequestBody MedicalStore medicalStore) {
        MedicalStore createdMedicalStore = medicalStoreService.createMedicalStore(medicalStore);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdMedicalStore);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MedicalStore> getMedicalStoreById(@PathVariable Long id) {
        MedicalStore medicalStore = medicalStoreService.getMedicalStoreById(id);
        return ResponseEntity.ok(medicalStore);
    }

    @GetMapping
    public ResponseEntity<List<MedicalStore>> getAllMedicalStores() {
        List<MedicalStore> medicalStores = medicalStoreService.getAllMedicalStores();
        return ResponseEntity.ok(medicalStores);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MedicalStore> updateMedicalStore(@PathVariable Long id, @RequestBody MedicalStore medicalStore) {
      
        MedicalStore updatedMedicalStore = medicalStoreService.updateMedicalStore(id,medicalStore);
        return ResponseEntity.ok(updatedMedicalStore);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMedicalStore(@PathVariable Long id) {
        medicalStoreService.deleteMedicalStore(id);
        return ResponseEntity.noContent().build();
    }
}
