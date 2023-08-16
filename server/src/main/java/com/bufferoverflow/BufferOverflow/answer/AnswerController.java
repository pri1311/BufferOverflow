package com.bufferoverflow.BufferOverflow.answer;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/answers")
public class AnswerController {
    private final AnswerService answerService;
    @PostMapping("/postAnswer")
    public ResponseEntity<Answer> postAnswer(
            @RequestBody Map<String, String> payload
    ) {
        return new ResponseEntity<Answer>(answerService.postAnswer(payload), HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<Answer>> getAllAnswers() {
        return new ResponseEntity<>(answerService.getAllAnswers(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Answer> getAnswerById(@PathVariable(value = "id") Integer id) {
        return new ResponseEntity<>(answerService.getAnswerById(id), HttpStatus.OK);
    }

    @PostMapping("/upvote/{id}")
    public ResponseEntity<Answer> upVoteAnswer(@PathVariable(value = "id") Integer id) {
        return new ResponseEntity<>(answerService.upvoteAnswer(id), HttpStatus.OK);
    }

    @PostMapping("/downvote/{id}")
    public ResponseEntity<Answer> downVoteAnswer(@PathVariable(value = "id") Integer id) {
        return new ResponseEntity<>(answerService.downVoteAnswer(id), HttpStatus.OK);
    }
}
