package com.bufferoverflow.BufferOverflow.question;

import com.bufferoverflow.BufferOverflow.answer.Answer;
import com.bufferoverflow.BufferOverflow.answer.AnswerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/questions")
public class QuestionController {
    private final QuestionService questionService;
    private final AnswerService answerService;
    @PostMapping("/add")
    public ResponseEntity<Question> postQuestion(
            @RequestBody QuestionRequest payload
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

    @PostMapping("/{id}/upvote")
    public ResponseEntity<Question> upVoteQuestion(@PathVariable(value = "id") Integer id) {
        return new ResponseEntity<>(questionService.upvoteQuestion(id), HttpStatus.OK);
    }

    @PostMapping("/{id}/downvote")
    public ResponseEntity<Question> downVoteQuestion(@PathVariable(value = "id") Integer id) {
        return new ResponseEntity<>(questionService.downVoteQuestion(id), HttpStatus.OK);
    }

    @PostMapping("/{id}/upvote/undo")
    public ResponseEntity<Question> undoUpVoteQuestion(@PathVariable(value = "id") Integer id) {
        return new ResponseEntity<>(questionService.downVoteQuestion(id), HttpStatus.OK);
    }

    @PostMapping("/{id}/downvote/undo")
    public ResponseEntity<Question> undoDownVoteQuestion(@PathVariable(value = "id") Integer id) {
        return new ResponseEntity<>(questionService.upvoteQuestion(id), HttpStatus.OK);
    }

    @GetMapping("/{id}/answers")
    public ResponseEntity<List<Answer>> getAllAnswers(@PathVariable(value = "id") Integer id) {
        return new ResponseEntity<>(answerService.getAllAnswers(id), HttpStatus.OK);
    }

    @PostMapping("/{id}/delete")
    public ResponseEntity<String> deleteQuestion(@PathVariable(value = "id") Integer id) {
        questionService.deleteQuestion(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
