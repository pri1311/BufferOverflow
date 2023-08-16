package com.bufferoverflow.BufferOverflow.question;

import com.bufferoverflow.BufferOverflow.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;

    public Question postQuestion (@RequestBody Map<String, String> payload) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Question question = Question
                .builder()
                .title(payload.get("title").toString())
                .body(payload.get("body").toString())
                .publicationDateTime(new Date())
                .upvotes(0)
                .user(user)
                .build();
        questionRepository.save(question);
        return question;
    }

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    public Question getQuestionById(Integer id) {
        return questionRepository.findById(id).get();
    }

    public Question upvoteQuestion(Integer id) {
        Question question = questionRepository.findById(id).get();
        question.setUpvotes(question.getUpvotes() + 1);
        questionRepository.save(question);
        return question;
    }

    public Question downVoteQuestion(Integer id) {
        Question question = questionRepository.findById(id).get();
        question.setUpvotes(question.getUpvotes() - 1);
        questionRepository.save(question);
        return question;
    }
}
