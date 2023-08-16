package com.bufferoverflow.BufferOverflow.question;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/questions")
public class QuestionController {
    private final QuestionService questionService;
    @PostMapping("/postQuestion")
    public ResponseEntity<Question> postQuestion(
            @RequestBody Map<String, String> payload
    ) {
        return new ResponseEntity<Question>(questionService.postQuestion(payload), HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<Question>> getAllQuestions() {
        return new ResponseEntity<>(questionService.getAllQuestions(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Question> getQuestionById(@PathVariable(value = "id") Integer id) {
        return new ResponseEntity<>(questionService.getQuestionById(id), HttpStatus.OK);
    }

    @PostMapping("/upvote/{id}")
    public ResponseEntity<Question> upVoteQuestion(@PathVariable(value = "id") Integer id) {
        return new ResponseEntity<>(questionService.upvoteQuestion(id), HttpStatus.OK);
    }

    @PostMapping("/downvote/{id}")
    public ResponseEntity<Question> downVoteQuestion(@PathVariable(value = "id") Integer id) {
        return new ResponseEntity<>(questionService.downVoteQuestion(id), HttpStatus.OK);
    }
}
