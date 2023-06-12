package com.sandeep.serviceIml;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sandeep.entities.DietPlan;
import com.sandeep.exception.NotFoundException;
import com.sandeep.repositories.DietPlanRepository;
import com.sandeep.service.DietPlanService;

@Service
@Transactional
public class DietPlanServiceImpl implements DietPlanService {

	private final DietPlanRepository dietPlanRepository;

	@Autowired
	public DietPlanServiceImpl(DietPlanRepository dietPlanRepository) {
		this.dietPlanRepository = dietPlanRepository;
	}

	@Override
	public DietPlan createDietPlan(DietPlan dietPlan) {
		return dietPlanRepository.save(dietPlan);
	}

	@Override
	public DietPlan getDietPlanById(Long id) {
		return dietPlanRepository.findById(id)
				.orElseThrow(() -> new NotFoundException("Diet Plan not found with id: " + id));
	}

	@Override
	public List<DietPlan> getAllDietPlans() {
		return dietPlanRepository.findAll();
	}

	@Override
	public DietPlan updateDietPlan(Long id, DietPlan dietPlan) {

		DietPlan existingDietPlan = dietPlanRepository.findById(id).orElse(null);
		if (existingDietPlan != null) {

			existingDietPlan.setDays(dietPlan.getDays());
			existingDietPlan.setBreakfast(dietPlan.getBreakfast());
			existingDietPlan.setLunch(dietPlan.getLunch());
			existingDietPlan.setDinner(dietPlan.getDinner());

			return dietPlanRepository.save(existingDietPlan);
		}
		return null;
	}

	@Override
	public void deleteDietPlan(Long id) {
		dietPlanRepository.deleteById(id);
	}
}
