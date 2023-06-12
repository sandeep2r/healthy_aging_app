package com.sandeep.serviceIml;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sandeep.entities.EmergencyContact;
import com.sandeep.exception.NotFoundException;
import com.sandeep.repositories.EmergencyContactRepository;
import com.sandeep.service.EmergencyContactService;

@Service
@Transactional
public class EmergencyContactServiceImpl implements EmergencyContactService {

	private final EmergencyContactRepository emergencyContactRepository;

	@Autowired
	public EmergencyContactServiceImpl(EmergencyContactRepository emergencyContactRepository) {
		this.emergencyContactRepository = emergencyContactRepository;
	}

	@Override
	public EmergencyContact createEmergencyContact(EmergencyContact emergencyContact) {
		return emergencyContactRepository.save(emergencyContact);
	}

	@Override
	public EmergencyContact getEmergencyContactById(Long id) {
		return emergencyContactRepository.findById(id)
				.orElseThrow(() -> new NotFoundException("Emergency Contact not found with id: " + id));
	}

	@Override
	public List<EmergencyContact> getAllEmergencyContacts() {
		return emergencyContactRepository.findAll();
	}

	@Override
	public EmergencyContact updateEmergencyContact(Long id, EmergencyContact emergencyContact) {
		EmergencyContact existingEmergencyContact = emergencyContactRepository.findById(id).orElse(null);
		if (existingEmergencyContact != null) {
			existingEmergencyContact.setName(emergencyContact.getName());
			existingEmergencyContact.setPhoneNumber(emergencyContact.getPhoneNumber());
			return emergencyContactRepository.save(emergencyContact);
		}
		return null;
	}

	@Override
	public void deleteEmergencyContact(Long id) {
		emergencyContactRepository.deleteById(id);
	}
}
