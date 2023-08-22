package com.bufferoverflow.BufferOverflow.question;

import com.bufferoverflow.BufferOverflow.answer.Answer;
import com.bufferoverflow.BufferOverflow.answer.AnswerRepository;
import com.bufferoverflow.BufferOverflow.answer.AnswerService;
import com.bufferoverflow.BufferOverflow.tag.Tag;
import com.bufferoverflow.BufferOverflow.tag.TagRepository;
import com.bufferoverflow.BufferOverflow.user.User;
import com.bufferoverflow.BufferOverflow.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.*;

@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final TagRepository tagRepository;
    private final AnswerService answerService;
    private final AnswerRepository answerRepository;
    private final UserService userService;

    public Question postQuestion (@RequestBody QuestionRequest payload) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Set<Tag> tags = new HashSet<>();
        payload.getTags().forEach(tag -> tags.add(tagRepository.findByName(tag)));
        Question question = Question
                .builder()
                .title(payload.getTitle())
                .body(payload.getBody())
                .publicationDateTime(new Date())
                .upvotes(0)
                .user(user)
                .tags(tags)
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

    public List<Question> getAllQuestionsByTag(Integer id) {
        return questionRepository.findAllByTags_id(id);
    }

    public void deleteQuestion(Integer id) {
        List<Answer> answers = answerService.getAllAnswers(id);
        answers.forEach(
                answerRepository::delete
        );
        questionRepository.deleteById(id);
    }
}
