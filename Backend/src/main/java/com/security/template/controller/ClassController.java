package com.security.template.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.security.template.model.Class;
import com.security.template.service.ClassService;

@RestController()
@RequestMapping("/classes")
@CrossOrigin(origins = "http://localhost:5173")
public class ClassController {
    @Autowired
    private ClassService cservice;

    @GetMapping("/getclasses")
    public List<Class> GetClasses() {
        return cservice.getClasses();
    }

    @PostMapping("/add")
    public Class AddClasses(@RequestBody Class clas) {
        return cservice.addClasses(clas);
    }

    @DeleteMapping("/delete/{cid}")
    public String DeleteClass(@PathVariable Long cid) {
        return cservice.deleteClass(cid);
    }

    @GetMapping("/getclass/{cid}")
    public Optional<Class> GetClassByCid(@PathVariable Long cid) {
        return cservice.getClassByCid(cid);
    }

    @PutMapping("/edit/{uid}")
    public Class EditClassDetails(@PathVariable Long uid, @RequestBody Class classDetails) {
        return cservice.editClassDetails(uid, classDetails);
    }
}
