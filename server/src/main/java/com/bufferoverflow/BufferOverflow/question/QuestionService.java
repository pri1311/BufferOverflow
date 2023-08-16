package com.bufferoverflow.BufferOverflow.question;

import com.bufferoverflow.BufferOverflow.tag.Tag;
import com.bufferoverflow.BufferOverflow.tag.TagRepository;
import com.bufferoverflow.BufferOverflow.user.User;
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

    public Question postQuestion (@RequestBody QuestionRequest payload) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Set<Tag> tags = new HashSet<Tag>();
        payload.getTags().forEach(tag -> {
            tags.add(tagRepository.findByName(tag));
        });
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
}
