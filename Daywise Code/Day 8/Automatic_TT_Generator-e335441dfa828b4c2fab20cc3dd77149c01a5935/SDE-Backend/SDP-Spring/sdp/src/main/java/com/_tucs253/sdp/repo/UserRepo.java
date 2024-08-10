package com._tucs253.sdp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com._tucs253.sdp.model.Users;

public interface UserRepo extends JpaRepository<Users, Long> {

}
