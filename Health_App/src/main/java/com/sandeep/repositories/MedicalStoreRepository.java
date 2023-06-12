package com.sandeep.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sandeep.entities.MedicalStore;

@Repository
public interface MedicalStoreRepository extends JpaRepository<MedicalStore, Long> {
	@Query("SELECT d FROM MedicalStore d WHERE d.user.id = :userId")
    List<MedicalStore> findAllByUserId(@Param("userId") Long userId);
}
