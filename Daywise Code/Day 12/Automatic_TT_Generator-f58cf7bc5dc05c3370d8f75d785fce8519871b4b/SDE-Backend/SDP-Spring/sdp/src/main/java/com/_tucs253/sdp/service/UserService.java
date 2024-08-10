package com._tucs253.sdp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com._tucs253.sdp.model.Users;
import com._tucs253.sdp.repo.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo urepo;

    public List<Users> getUsers() {
        return urepo.findAll();
    }

    public Optional<Users> getUsersById(Long uid) {
        return urepo.findById(uid);
    }

    public Users addUsers(Users user) {
        return urepo.save(user);
    }

    public String deleteUser(Long uid) {
        urepo.deleteById(uid);
        return "User Deleted " + uid;
    }

}