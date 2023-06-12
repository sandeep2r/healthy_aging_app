package com.sandeep.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sandeep.entities.Hospital;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Long> {
	@Query("SELECT d FROM Hospital d WHERE d.user.id = :userId")
    List<Hospital> findAllByUserId(@Param("userId") Long userId);
}
