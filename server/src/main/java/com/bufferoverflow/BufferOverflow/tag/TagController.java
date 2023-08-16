package com.bufferoverflow.BufferOverflow.tag;

import com.bufferoverflow.BufferOverflow.question.Question;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/tags")
public class TagController {
    private final TagService tagService;
    @PostMapping("/createTag")
    public ResponseEntity<Tag> createTag(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<>(tagService.createTag(payload), HttpStatus.OK);
    }

    @GetMapping("/{name}/questions")
    public ResponseEntity<List<Question>> getAllQuestionsByTag(@PathVariable(value = "name") String name) {
        return new ResponseEntity<>(tagService.getAllQuestionsByTag(name), HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<Tag>> getAllTags() {
        return new ResponseEntity<>(tagService.getAllTags(), HttpStatus.OK);
    }
}
