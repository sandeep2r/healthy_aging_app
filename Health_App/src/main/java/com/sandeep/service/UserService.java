package com.sandeep.service;

import java.util.List;

import com.sandeep.entities.DietPlan;
import com.sandeep.entities.EmergencyContact;
import com.sandeep.entities.Hospital;
import com.sandeep.entities.MedicalStore;
import com.sandeep.entities.MedicinePlan;
import com.sandeep.entities.User;

public interface UserService {
    User createUser(User user);
    public User login(String username, String password, String role);
    User getUserById(Long id);
    List<User> getAllUsers();
    User updateUser(Long id,User user);
    void deleteUser(Long id);
    
    // Additional methods for the associations
    List<DietPlan> getDietPlansByUserId(Long userId);
    List<MedicinePlan> getUserMedicinePlans(Long userId);
    List<Hospital> getUserHospitals(Long userId);
    List<MedicalStore> getUserMedicalStores(Long userId);
    List<EmergencyContact> getUserEmergencyContacts(Long userId);
}
