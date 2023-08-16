package com.bufferoverflow.BufferOverflow.answer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Integer> {
    public List<Answer> findAllByQuestionId(Integer id);
}
