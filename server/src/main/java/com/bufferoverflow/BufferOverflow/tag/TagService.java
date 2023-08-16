package com.bufferoverflow.BufferOverflow.tag;

import com.bufferoverflow.BufferOverflow.question.Question;
import com.bufferoverflow.BufferOverflow.question.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class TagService {
    private final TagRepository tagRepository;
    private final QuestionService questionService;
    public Tag createTag(Map<String, String> payload) {
        Tag tag = Tag
                .builder()
                .name(payload.get("name"))
                .build();
        tagRepository.save(tag);
        return tag;
    }

    public List<Question> getAllQuestionsByTag(String name) {
        Tag tag = tagRepository.findByName(name);
        System.out.println(tag.getId());
        System.out.println(questionService.getAllQuestionsByTag(tag.getId()).getClass());
        System.out.println("here");
        return new ArrayList<Question>(questionService.getAllQuestionsByTag(tag.getId()));
    }

    public List<Tag> getAllTags() {
        return tagRepository.findAll();
    }
}
