package com.sandeep.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sandeep.entities.DietPlan;

@Repository
public interface DietPlanRepository extends JpaRepository<DietPlan, Long> {
	@Query("SELECT d FROM DietPlan d WHERE d.user.id = :userId")
    List<DietPlan> findAllByUserId(@Param("userId") Long userId);
}
