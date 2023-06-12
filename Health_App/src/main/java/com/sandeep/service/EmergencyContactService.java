package com.sandeep.service;

import java.util.List;

import com.sandeep.entities.EmergencyContact;

public interface EmergencyContactService {
    EmergencyContact createEmergencyContact(EmergencyContact emergencyContact);
    EmergencyContact getEmergencyContactById(Long id);
    List<EmergencyContact> getAllEmergencyContacts();
    EmergencyContact updateEmergencyContact(Long id,EmergencyContact emergencyContact);
    void deleteEmergencyContact(Long id);
}
