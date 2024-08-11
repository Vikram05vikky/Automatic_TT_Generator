// package com.security.template.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import com.security.template.model.User;
// import com.security.template.service.UserService;

// import java.util.List;

// @RestController
// @RequestMapping("/users")
// public class UserController {
//     @Autowired
//     private UserService uservice;

//     @GetMapping("/getusers")
//     public List<User> getUsers() {
//         return uservice.getUsers();
//     }

//     @PostMapping("/register")
//     public User addUsers(@RequestBody User user) {
//         return uservice.addUsers(user);
//     }

//     @DeleteMapping("/delete/{uid}")
//     public String deleteUser(@PathVariable Long uid) {
//         return uservice.deleteUser(uid);
//     }

//     @GetMapping("/find/{uid}")
//     public User findUserByUid(@PathVariable Long uid) {
//         return uservice.findUserByUid(uid);
//     }

//     @PutMapping("/edit/{uid}")
//     public User editUserByUid(@PathVariable Long uid, @RequestBody User userDetails) {
//         return uservice.editUserByUid(uid, userDetails);
//     }

//     // @PostMapping("/login")
//     // public ResponseEntity<String> Login(@RequestBody User user) {
//     // User a = uservice.getUserByEmail(user.getEmail());
//     // if (a == null || !user.getPassword().equals(user.getPassword()))
//     // return ResponseEntity.badRequest().body("Invalid");
//     // else
//     // return ResponseEntity.ok("Success");
//     // }
// }

package com.security.template.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.security.template.model.User;
import com.security.template.service.UserService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService uservice;

    @GetMapping("/getusers")
    public List<User> getUsers() {
        return uservice.getUsers();
    }

    @PostMapping("/register")
    public User addUsers(@RequestBody User user) {
        return uservice.addUsers(user);
    }

    @DeleteMapping("/delete/{uid}")
    public String deleteUser(@PathVariable Long uid) {
        return uservice.deleteUser(uid);
    }

    @GetMapping("/find/{uid}")
    public User findUserByUid(@PathVariable Long uid) {
        return uservice.findUserByUid(uid);
    }

    @PutMapping("/edit/{uid}")
    public User editUserByUid(@PathVariable Long uid, @RequestBody User userDetails) {
        return uservice.editUserByUid(uid, userDetails);
    }

    @PostMapping("/login")
    public ResponseEntity<String> Login(@RequestBody User user) {
        Optional<User> a = uservice.getUserByEmail(user.getEmail());
        if (a == null || !user.getPassword().equals(user.getPassword()))
            return ResponseEntity.badRequest().body("Invalid");
        else
            return ResponseEntity.ok("Success");
    }
}