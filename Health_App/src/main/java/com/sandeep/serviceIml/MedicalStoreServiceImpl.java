package com.sandeep.serviceIml;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sandeep.entities.MedicalStore;
import com.sandeep.exception.NotFoundException;
import com.sandeep.repositories.MedicalStoreRepository;
import com.sandeep.service.MedicalStoreService;

@Service
@Transactional
public class MedicalStoreServiceImpl implements MedicalStoreService {

	private final MedicalStoreRepository medicalStoreRepository;

	@Autowired
	public MedicalStoreServiceImpl(MedicalStoreRepository medicalStoreRepository) {
		this.medicalStoreRepository = medicalStoreRepository;
	}

	@Override
	public MedicalStore createMedicalStore(MedicalStore medicalStore) {
		return medicalStoreRepository.save(medicalStore);
	}

	@Override
	public MedicalStore getMedicalStoreById(Long id) {
		return medicalStoreRepository.findById(id)
				.orElseThrow(() -> new NotFoundException("Medical Store not found with id: " + id));
	}

	@Override
	public List<MedicalStore> getAllMedicalStores() {
		return medicalStoreRepository.findAll();
	}

	@Override
	public MedicalStore updateMedicalStore(Long id, MedicalStore medicalStore) {
		MedicalStore existingMedicalStore = medicalStoreRepository.findById(id).orElse(null);
		if (existingMedicalStore != null) {
			existingMedicalStore.setName(medicalStore.getName());
			existingMedicalStore.setAddress(medicalStore.getAddress());
			existingMedicalStore.setContact(medicalStore.getContact());

			return medicalStoreRepository.save(medicalStore);
		}
		return null;
	}

	@Override
	public void deleteMedicalStore(Long id) {
		medicalStoreRepository.deleteById(id);
	}
}
