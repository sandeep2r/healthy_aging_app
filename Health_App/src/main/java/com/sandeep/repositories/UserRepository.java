package com.sandeep.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sandeep.entities.User;
@Repository
public interface UserRepository extends JpaRepository<User,Long> {
	
	@Query("SELECT u FROM User u WHERE u.username = ?1 AND u.password = ?2 AND u.role = ?3")
    User findByUsernameAndPasswordAndRole(String username, String password, String role);

}
