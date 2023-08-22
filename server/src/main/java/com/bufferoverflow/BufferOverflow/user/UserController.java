package com.bufferoverflow.BufferOverflow.user;

import com.bufferoverflow.BufferOverflow.question.Question;
import com.bufferoverflow.BufferOverflow.question.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/users")
public class UserController {
    private final UserRepository userRepository;
    private final QuestionRepository questionRepository;
    
    @PostMapping("/me")
    public User getCurrentUser() {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return user;
    }

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
