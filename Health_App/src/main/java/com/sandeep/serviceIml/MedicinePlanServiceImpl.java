package com.sandeep.serviceIml;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sandeep.entities.MedicinePlan;
import com.sandeep.exception.NotFoundException;
import com.sandeep.repositories.MedicinePlanRepository;
import com.sandeep.service.MedicinePlanService;



@Service
@Transactional
public class MedicinePlanServiceImpl implements MedicinePlanService {

    private final MedicinePlanRepository medicinePlanRepository;

    @Autowired
    public MedicinePlanServiceImpl(MedicinePlanRepository medicinePlanRepository) {
        this.medicinePlanRepository = medicinePlanRepository;
    }

    @Override
    public MedicinePlan createMedicinePlan(MedicinePlan medicinePlan) {
        return medicinePlanRepository.save(medicinePlan);
    }

    @Override
    public MedicinePlan getMedicinePlanById(Long id) {
        return medicinePlanRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Medicine Plan not found with id: " + id));
    }

    @Override
    public List<MedicinePlan> getAllMedicinePlans() {
        return medicinePlanRepository.findAll();
    }

    @Override
    public MedicinePlan updateMedicinePlan(Long id,MedicinePlan medicinePlan) {
    	MedicinePlan existingPlan = medicinePlanRepository.findById(id).orElse(null);
    	if(existingPlan != null) {
    		
    		existingPlan.setDays(medicinePlan.getDays());
			existingPlan.setBreakfast(medicinePlan.getBreakfast());
			existingPlan.setLunch(medicinePlan.getLunch());
			existingPlan.setDinner(medicinePlan.getDinner());

    		
    		 return medicinePlanRepository.save(medicinePlan);
    	}
       return null;
    }

    @Override
    public void deleteMedicinePlan(Long id) {
        medicinePlanRepository.deleteById(id);
    }
}
