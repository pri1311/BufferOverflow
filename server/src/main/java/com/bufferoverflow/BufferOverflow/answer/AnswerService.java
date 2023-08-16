package com.bufferoverflow.BufferOverflow.answer;

import com.bufferoverflow.BufferOverflow.question.Question;
import com.bufferoverflow.BufferOverflow.question.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionRepository questionRepository;
    public Answer postAnswer(@RequestBody Map<String, String> payload) {
        Optional<Question> question = questionRepository.findById(Integer.parseInt(payload.get("question_id")));
        Answer answer = Answer
                .builder()
                .body(payload.get("body").toString())
                .publicationDateTime(new Date())
                .upvotes(0)
                .question(question.orElse(new Question()))
                .isAccepted(false)
                .build();
        answerRepository.save(answer);
        return answer;
    }

    public List<Answer> getAllAnswers() {
        return answerRepository.findAll();
    }

    public List<Answer> getAllAnswers(Integer id) {
        return answerRepository.findAllByQuestionId(id);
    }

    public Answer getAnswerById(Integer id) {
        return answerRepository.findById(id).get();
    }

    public Answer upvoteAnswer(Integer id) {
        Answer answer = answerRepository.findById(id).get();
        answer.setUpvotes(answer.getUpvotes() + 1);
        answerRepository.save(answer);
        return answer;
    }

    public Answer downVoteAnswer(Integer id) {
        Answer answer = answerRepository.findById(id).get();
        answer.setUpvotes(answer.getUpvotes() - 1);
        answerRepository.save(answer);
        return answer;
    }
}
