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

import com.sandeep.entities.EmergencyContact;
import com.sandeep.service.EmergencyContactService;

@RestController
@RequestMapping("/api/emergencycontacts")
public class EmergencyContactController {

    private final EmergencyContactService emergencyContactService;

    @Autowired
    public EmergencyContactController(EmergencyContactService emergencyContactService) {
        this.emergencyContactService = emergencyContactService;
    }

    @PostMapping
    public ResponseEntity<EmergencyContact> createEmergencyContact(@RequestBody EmergencyContact emergencyContact) {
        EmergencyContact createdEmergencyContact = emergencyContactService.createEmergencyContact(emergencyContact);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdEmergencyContact);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmergencyContact> getEmergencyContactById(@PathVariable Long id) {
        EmergencyContact emergencyContact = emergencyContactService.getEmergencyContactById(id);
        return ResponseEntity.ok(emergencyContact);
    }

    @GetMapping
    public ResponseEntity<List<EmergencyContact>> getAllEmergencyContacts() {
        List<EmergencyContact> emergencyContacts = emergencyContactService.getAllEmergencyContacts();
        return ResponseEntity.ok(emergencyContacts);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EmergencyContact> updateEmergencyContact(@PathVariable Long id, @RequestBody EmergencyContact emergencyContact) {
       
        EmergencyContact updatedEmergencyContact = emergencyContactService.updateEmergencyContact(id,emergencyContact);
        return ResponseEntity.ok(updatedEmergencyContact);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmergencyContact(@PathVariable Long id) {
        emergencyContactService.deleteEmergencyContact(id);
        return ResponseEntity.noContent().build();
    }
}
