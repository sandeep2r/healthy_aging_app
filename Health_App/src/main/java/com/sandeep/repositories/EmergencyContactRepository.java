package com.sandeep.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sandeep.entities.EmergencyContact;

@Repository
public interface EmergencyContactRepository extends JpaRepository<EmergencyContact, Long> {
	@Query("SELECT d FROM EmergencyContact d WHERE d.user.id = :userId")
    List<EmergencyContact> findAllByUserId(@Param("userId") Long userId);
}
