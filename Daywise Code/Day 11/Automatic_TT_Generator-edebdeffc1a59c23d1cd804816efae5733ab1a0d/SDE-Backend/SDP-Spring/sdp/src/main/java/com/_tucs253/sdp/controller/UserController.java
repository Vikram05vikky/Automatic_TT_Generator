package com._tucs253.sdp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com._tucs253.sdp.model.Users;
import com._tucs253.sdp.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService uservice;

    @GetMapping("/getusers")
    public List<Users> GetUsers() {
        return uservice.getUsers();
    }

    @GetMapping("/getusers/{uid}")
    public Optional<Users> getUsersById(@PathVariable long uid) {
        return uservice.getUsersById(uid);
    }

    @PostMapping("/register")
    public Users AddUsers(@RequestBody Users user) {
        return uservice.addUsers(user);
    }

    @DeleteMapping("/delete/{uid}")
    public String DeleteUser(@PathVariable Long uid) {
        return uservice.deleteUser(uid);
    }
}