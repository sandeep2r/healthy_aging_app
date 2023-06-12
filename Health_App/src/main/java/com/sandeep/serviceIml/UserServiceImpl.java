package com.sandeep.serviceIml;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sandeep.entities.DietPlan;
import com.sandeep.entities.EmergencyContact;
import com.sandeep.entities.Hospital;
import com.sandeep.entities.MedicalStore;
import com.sandeep.entities.MedicinePlan;
import com.sandeep.entities.User;
import com.sandeep.exception.NotFoundException;
import com.sandeep.repositories.DietPlanRepository;
import com.sandeep.repositories.EmergencyContactRepository;
import com.sandeep.repositories.HospitalRepository;
import com.sandeep.repositories.MedicalStoreRepository;
import com.sandeep.repositories.MedicinePlanRepository;
import com.sandeep.repositories.UserRepository;
import com.sandeep.service.UserService;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final DietPlanRepository dietPlanRepository;
    private final MedicinePlanRepository medicinePlanRepository;
    private final HospitalRepository hospitalRepository;
    private final MedicalStoreRepository medicalStoreRepository;
    private final EmergencyContactRepository emergencyContactRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository,DietPlanRepository dietPlanRepository,MedicinePlanRepository medicinePlanRepository,HospitalRepository hospitalRepository,MedicalStoreRepository medicalStoreRepository,EmergencyContactRepository emergencyContactRepository) {
        this.userRepository = userRepository;
        this.dietPlanRepository = dietPlanRepository;
        this.medicinePlanRepository = medicinePlanRepository;
        this.hospitalRepository = hospitalRepository;
        this.medicalStoreRepository = medicalStoreRepository;
        this.emergencyContactRepository = emergencyContactRepository;
    }

    @Override
    public User createUser(User user) {
    	System.out.println("you are in service "+user.getUsername());
        return userRepository.save(user);
    }
    
    @Override
    public User login(String username, String password, String role) {
        return userRepository.findByUsernameAndPasswordAndRole(username, password, role);
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("User not found with id: " + id));
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User updateUser(Long id,User user) {
        User existingUser = userRepository.findById(id).orElse(null);
        if(existingUser != null) {
        	existingUser.setUsername(user.getUsername());
        	existingUser.setPassword(user.getPassword());
        	existingUser.setRole(user.getRole());
        	return userRepository.save(user);
        }
        return null;
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public List<DietPlan> getDietPlansByUserId(Long userId) {
    	return dietPlanRepository.findAllByUserId(userId);
    }

    @Override
    public List<MedicinePlan> getUserMedicinePlans(Long userId) {
    	return medicinePlanRepository.findAllByUserId(userId);
    }

    @Override
    public List<Hospital> getUserHospitals(Long userId) {
       return hospitalRepository.findAllByUserId(userId);
    }

    @Override
    public List<MedicalStore> getUserMedicalStores(Long userId) {
        return medicalStoreRepository.findAllByUserId(userId);
    }

    @Override
    public List<EmergencyContact> getUserEmergencyContacts(Long userId) {
        return emergencyContactRepository.findAllByUserId(userId);
    }
}

