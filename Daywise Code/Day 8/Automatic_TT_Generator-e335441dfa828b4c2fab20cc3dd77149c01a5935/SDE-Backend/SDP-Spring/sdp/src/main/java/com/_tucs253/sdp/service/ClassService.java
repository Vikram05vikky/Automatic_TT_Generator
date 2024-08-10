package com._tucs253.sdp.service;

import com._tucs253.sdp.model.Class;
import com._tucs253.sdp.repo.ClassRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClassService {

    @Autowired
    private ClassRepo crepo;

    public List<Class> getAllClasses() {
        return crepo.findAll();
    }

    public Optional<Class> getClassById(long id) {
        return crepo.findById(id);
    }

    public Class createClass(Class cls) {
        return crepo.save(cls);
    }

    public Class updateClass(long id, Class cls) {
        if (crepo.existsById(id)) {
            cls.setCid(id);
            return crepo.save(cls);
        } else {
            throw new RuntimeException("Class not found");
        }
    }

    public void deleteClass(long id) {
        crepo.deleteById(id);
    }
}
