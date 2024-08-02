package com._tucs253.sdp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com._tucs253.sdp.model.Subject;

public interface SubjectRepo extends JpaRepository<Subject, Long> {

}