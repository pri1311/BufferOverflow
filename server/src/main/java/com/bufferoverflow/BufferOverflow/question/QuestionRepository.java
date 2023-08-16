package com.bufferoverflow.BufferOverflow.question;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {
    public List<Question> findAllByUserId(Integer id);
    public List<Question> findAllByTags_id(Integer id);
}
