package com.sandeep.service;

import java.util.List;

import com.sandeep.entities.MedicalStore;

public interface MedicalStoreService {
    MedicalStore createMedicalStore(MedicalStore medicalStore);
    MedicalStore getMedicalStoreById(Long id);
    List<MedicalStore> getAllMedicalStores();
    MedicalStore updateMedicalStore(Long id,MedicalStore medicalStore);
    void deleteMedicalStore(Long id);
}
