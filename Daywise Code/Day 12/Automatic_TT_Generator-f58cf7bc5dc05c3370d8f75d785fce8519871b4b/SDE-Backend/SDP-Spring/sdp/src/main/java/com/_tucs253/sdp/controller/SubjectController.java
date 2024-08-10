package com._tucs253.sdp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com._tucs253.sdp.model.Subject;
import com._tucs253.sdp.service.SubjectService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/subjects")
public class SubjectController {

    @Autowired
    private SubjectService subjectService;

    @GetMapping("/getall")
    public List<Subject> getAllSubjects() {
        return subjectService.getAllSubjects();
    }

    @GetMapping("getsubject/{id}")
    public ResponseEntity<Subject> getSubjectById(@PathVariable long id) {
        Optional<Subject> subject = subjectService.getSubjectById(id);
        if (subject.isPresent()) {
            return ResponseEntity.ok(subject.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/addsubject")
    public Subject createSubject(@RequestBody Subject subject) {
        return subjectService.createSubject(subject);
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<Void> deleteSubject(@PathVariable long id) {
        subjectService.deleteSubject(id);
        return ResponseEntity.noContent().build();
    }
}
