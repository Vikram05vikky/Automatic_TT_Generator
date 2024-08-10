package com._tucs253.sdp.controller;

import com._tucs253.sdp.model.Class;
import com._tucs253.sdp.service.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/classes")
public class ClassController {

    @Autowired
    private ClassService classService;

    @GetMapping("/all")
    public List<Class> getAllClasses() {
        return classService.getAllClasses();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Class> getClassById(@PathVariable long id) {
        return classService.getClassById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/addclass")
    public Class createClass(@RequestBody Class cls) {
        return classService.createClass(cls);
    }

    @PutMapping("edit/{id}")
    public ResponseEntity<Class> updateClass(@PathVariable long id, @RequestBody Class cls) {
        try {
            return ResponseEntity.ok(classService.updateClass(id, cls));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<Void> deleteClass(@PathVariable long id) {
        classService.deleteClass(id);
        return ResponseEntity.noContent().build();
    }
}
