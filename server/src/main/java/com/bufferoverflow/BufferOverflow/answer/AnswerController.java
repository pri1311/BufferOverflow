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
    @PostMapping("/add")
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

    @PostMapping("/{id}/upvote")
    public ResponseEntity<Answer> upVoteAnswer(@PathVariable(value = "id") Integer id) {
        return new ResponseEntity<>(answerService.upvoteAnswer(id), HttpStatus.OK);
    }

    @PostMapping("/{id}/upvote/undo")
    public ResponseEntity<Answer> undoUpVoteAnswer(@PathVariable(value = "id") Integer id) {
        return new ResponseEntity<>(answerService.downVoteAnswer(id), HttpStatus.OK);
    }

    @PostMapping("/{id}/downvote")
    public ResponseEntity<Answer> downVoteAnswer(@PathVariable(value = "id") Integer id) {
        return new ResponseEntity<>(answerService.downVoteAnswer(id), HttpStatus.OK);
    }

    @PostMapping("/{id}/downvote/undo")
    public ResponseEntity<Answer> undoDownVoteAnswer(@PathVariable(value = "id") Integer id) {
        return new ResponseEntity<>(answerService.upvoteAnswer(id), HttpStatus.OK);
    }

    @PostMapping("/{id}/accept")
    public ResponseEntity<Answer> acceptAnswer(@PathVariable(value = "id") Integer id) {
        return new ResponseEntity<>(answerService.acceptAnswer(id), HttpStatus.OK);
    }

    @PostMapping("/{id}/accept/undo")
    public ResponseEntity<Answer> undoAcceptAnswer(@PathVariable(value = "id") Integer id) {
        return new ResponseEntity<>(answerService.undoAcceptAnswer(id), HttpStatus.OK);
    }

    @PostMapping("/{id}/delete")
    public ResponseEntity<String> deleteAnswer(@PathVariable(value = "id") Integer id) {
        answerService.deleteAnswer(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
