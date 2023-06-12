package com.sandeep.service;

import java.util.List;

import com.sandeep.entities.Hospital;

public interface HospitalService {
    Hospital createHospital(Hospital hospital);
    Hospital getHospitalById(Long id);
    List<Hospital> getAllHospitals();
    Hospital updateHospital(Long id,Hospital hospital);
    void deleteHospital(Long id);
}
