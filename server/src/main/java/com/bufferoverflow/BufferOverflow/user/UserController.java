package com.bufferoverflow.BufferOverflow.user;

import com.bufferoverflow.BufferOverflow.question.Question;
import com.bufferoverflow.BufferOverflow.question.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/users")
public class UserController {
    private final UserRepository userRepository;
    private final QuestionRepository questionRepository;

    @GetMapping("/")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable(value = "id") Integer id) {
        return userRepository.findById(id);
    }

    @GetMapping("/{id}/questions")
    public List<Question> getQuestionsByUser(@PathVariable(value = "id") Integer id) {
        return questionRepository.findAllByUserId(id);
    }
}
