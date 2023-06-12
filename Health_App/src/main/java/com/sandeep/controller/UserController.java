package com.sandeep.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sandeep.dto.LoginRequest;
import com.sandeep.entities.DietPlan;
import com.sandeep.entities.EmergencyContact;
import com.sandeep.entities.Hospital;
import com.sandeep.entities.MedicalStore;
import com.sandeep.entities.MedicinePlan;
import com.sandeep.entities.User;
import com.sandeep.service.DietPlanService;
import com.sandeep.service.EmergencyContactService;
import com.sandeep.service.HospitalService;
import com.sandeep.service.MedicalStoreService;
import com.sandeep.service.MedicinePlanService;
import com.sandeep.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService userService;
    private final DietPlanService dietPlanService;
    private final MedicinePlanService medicinePlanService;
    private final HospitalService hospitalService;
    private final MedicalStoreService medicalStoreService;
    private final EmergencyContactService emergencyContactService;

    @Autowired
    public UserController(UserService userService, DietPlanService dietPlanService,
                          MedicinePlanService medicinePlanService, HospitalService hospitalService,
                          MedicalStoreService medicalStoreService, EmergencyContactService emergencyContactService) {
        this.userService = userService;
        this.dietPlanService = dietPlanService;
        this.medicinePlanService = medicinePlanService;
        this.hospitalService = hospitalService;
        this.medicalStoreService = medicalStoreService;
        this.emergencyContactService = emergencyContactService;
    }

    // User CRUD operations

    @PostMapping("/save")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();
        String role = loginRequest.getRole();

        User user = userService.login(username, password, role);

        if (user != null) {
            // User is logged in successfully
        	return ResponseEntity.status(HttpStatus.OK).body(user);

        } else {
            // Login failed
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }


    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @GetMapping("/list")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    // DietPlan CRUD operations

    @PostMapping("/{userId}/diet-plans")
    public DietPlan createDietPlan(@PathVariable Long userId, @RequestBody DietPlan dietPlan) {
        User user = userService.getUserById(userId);
        dietPlan.setUser(user);
        return dietPlanService.createDietPlan(dietPlan);
    }

    @GetMapping("/{userId}/diet-plans")
    public ResponseEntity<List<DietPlan>> getDietPlansByUserId(@PathVariable Long userId) {
        List<DietPlan> dietPlans = userService.getDietPlansByUserId(userId);
        return ResponseEntity.status(HttpStatus.OK).body(dietPlans);
    }

    @GetMapping("/{userId}/diet-plans/{dietPlanId}")
    public DietPlan getDietPlanById(@PathVariable Long dietPlanId) {
        return dietPlanService.getDietPlanById(dietPlanId);
    }

    @PutMapping("/{userId}/diet-plans/{dietPlanId}")
    public DietPlan updateDietPlan(@PathVariable Long dietPlanId, @RequestBody DietPlan dietPlan) {
        return dietPlanService.updateDietPlan(dietPlanId, dietPlan);
    }

    @DeleteMapping("/{userId}/diet-plans/{dietPlanId}")
    public void deleteDietPlan(@PathVariable Long dietPlanId) {
        dietPlanService.deleteDietPlan(dietPlanId);
    }

    // MedicinePlan CRUD operations

    @PostMapping("/{userId}/medicine-plans")
    public MedicinePlan createMedicinePlan(@PathVariable Long userId, @RequestBody MedicinePlan medicinePlan) {
        User user = userService.getUserById(userId);
        medicinePlan.setUser(user);
        return medicinePlanService.createMedicinePlan(medicinePlan);
    }

    @GetMapping("/{userId}/medicine-plans")
    public ResponseEntity<List<MedicinePlan>> getUserMedicinePlans(@PathVariable Long userId) {
        List<MedicinePlan> medicinePlans = userService.getUserMedicinePlans(userId);
        return ResponseEntity.status(HttpStatus.OK).body(medicinePlans);
    }

    @GetMapping("/{userId}/medicine-plans/{medicinePlanId}")
    public MedicinePlan getMedicinePlanById(@PathVariable Long medicinePlanId) {
        return medicinePlanService.getMedicinePlanById(medicinePlanId);
    }

    @PutMapping("/{userId}/medicine-plans/{medicinePlanId}")
    public MedicinePlan updateMedicinePlan(@PathVariable Long medicinePlanId, @RequestBody MedicinePlan medicinePlan) {
        return medicinePlanService.updateMedicinePlan(medicinePlanId, medicinePlan);
    }

    @DeleteMapping("/{userId}/medicine-plans/{medicinePlanId}")
    public void deleteMedicinePlan(@PathVariable Long medicinePlanId) {
        medicinePlanService.deleteMedicinePlan(medicinePlanId);
    }

    // Hospital CRUD operations

    @PostMapping("/{userId}/hospitals")
    public Hospital createHospital(@PathVariable Long userId, @RequestBody Hospital hospital) {
        User user = userService.getUserById(userId);
        hospital.setUser(user);
        return hospitalService.createHospital(hospital);
    }

    @GetMapping("/{userId}/hospitals")
    public ResponseEntity<List<Hospital>> getUserHospitals(@PathVariable Long userId) {
       List<Hospital> hospitals = userService.getUserHospitals(userId);
       return ResponseEntity.status(HttpStatus.OK).body(hospitals);
    }

    @GetMapping("/{userId}/hospitals/{hospitalId}")
    public Hospital getHospitalById(@PathVariable Long hospitalId) {
        return hospitalService.getHospitalById(hospitalId);
    }

    @PutMapping("/{userId}/hospitals/{hospitalId}")
    public Hospital updateHospital(@PathVariable Long hospitalId, @RequestBody Hospital hospital) {
        return hospitalService.updateHospital(hospitalId, hospital);
    }

    @DeleteMapping("/{userId}/hospitals/{hospitalId}")
    public void deleteHospital(@PathVariable Long hospitalId) {
        hospitalService.deleteHospital(hospitalId);
    }

    // MedicalStore CRUD operations

    @PostMapping("/{userId}/medical-stores")
    public MedicalStore createMedicalStore(@PathVariable Long userId, @RequestBody MedicalStore medicalStore) {
        User user = userService.getUserById(userId);
        medicalStore.setUser(user);
        return medicalStoreService.createMedicalStore(medicalStore);
    }

    @GetMapping("/{userId}/medical-stores")
    public ResponseEntity<List<MedicalStore>> getUserMedicalStores(@PathVariable Long userId) {
        List<MedicalStore> medicalStores = userService.getUserMedicalStores(userId);
        return ResponseEntity.status(HttpStatus.OK).body(medicalStores);
        
    }

    @GetMapping("/{userId}/medical-stores/{medicalStoreId}")
    public MedicalStore getMedicalStoreById(@PathVariable Long medicalStoreId) {
        return medicalStoreService.getMedicalStoreById(medicalStoreId);
    }

    @PutMapping("/{userId}/medical-stores/{medicalStoreId}")
    public MedicalStore updateMedicalStore(@PathVariable Long medicalStoreId, @RequestBody MedicalStore medicalStore) {
        return medicalStoreService.updateMedicalStore(medicalStoreId, medicalStore);
    }

    @DeleteMapping("/{userId}/medical-stores/{medicalStoreId}")
    public void deleteMedicalStore(@PathVariable Long medicalStoreId) {
        medicalStoreService.deleteMedicalStore(medicalStoreId);
    }

    // EmergencyContact CRUD operations

    @PostMapping("/{userId}/emergency-contacts")
    public EmergencyContact createEmergencyContact(@PathVariable Long userId, @RequestBody EmergencyContact emergencyContact) {
        User user = userService.getUserById(userId);
        emergencyContact.setUser(user);
        return emergencyContactService.createEmergencyContact(emergencyContact);
    }

    @GetMapping("/{userId}/emergency-contacts")
    public ResponseEntity<List<EmergencyContact>> getUserEmergencyContacts(@PathVariable Long userId) {
    	List<EmergencyContact> emergencyContacts = userService.getUserEmergencyContacts(userId);
    	 return ResponseEntity.status(HttpStatus.OK).body(emergencyContacts);
    	
    }

    @GetMapping("/{userId}/emergency-contacts/{emergencyContactId}")
    public EmergencyContact getEmergencyContactById(@PathVariable Long emergencyContactId) {
        return emergencyContactService.getEmergencyContactById(emergencyContactId);
    }

    @PutMapping("/{userId}/emergency-contacts/{emergencyContactId}")
    public EmergencyContact updateEmergencyContact(@PathVariable Long emergencyContactId, @RequestBody EmergencyContact emergencyContact) {
        return emergencyContactService.updateEmergencyContact(emergencyContactId, emergencyContact);
    }

    @DeleteMapping("/{userId}/emergency-contacts/{emergencyContactId}")
    public void deleteEmergencyContact(@PathVariable Long emergencyContactId) {
        emergencyContactService.deleteEmergencyContact(emergencyContactId);
    }

}
