package com.sandeep.serviceIml;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sandeep.entities.Hospital;
import com.sandeep.entities.MedicalStore;
import com.sandeep.exception.NotFoundException;
import com.sandeep.repositories.HospitalRepository;
import com.sandeep.service.HospitalService;



@Service
@Transactional
public class HospitalServiceImpl implements HospitalService {

    private final HospitalRepository hospitalRepository;

    @Autowired
    public HospitalServiceImpl(HospitalRepository hospitalRepository) {
        this.hospitalRepository = hospitalRepository;
    }

    @Override
    public Hospital createHospital(Hospital hospital) {
        return hospitalRepository.save(hospital);
    }

    @Override
    public Hospital getHospitalById(Long id) {
        return hospitalRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Hospital not found with id: " + id));
    }

    @Override
    public List<Hospital> getAllHospitals() {
        return hospitalRepository.findAll();
    }

    @Override
    public Hospital updateHospital(Long id,Hospital hospital) {
    	
    	Hospital existingHospital = hospitalRepository.findById(id).orElse(null);
		if (existingHospital != null) {
			existingHospital.setName(hospital.getName());
			existingHospital.setAddress(hospital.getAddress());
			existingHospital.setContact(hospital.getContact());

			return hospitalRepository.save(hospital);
		}
		return null;
        
    }

    @Override
    public void deleteHospital(Long id) {
        hospitalRepository.deleteById(id);
    }
}
