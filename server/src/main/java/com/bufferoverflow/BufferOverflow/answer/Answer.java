package com.bufferoverflow.BufferOverflow.answer;

import com.bufferoverflow.BufferOverflow.question.Question;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "answers")
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String body;
    private Integer upvotes;
    private Boolean isAccepted;
    @CreationTimestamp
    private Date publicationDateTime;
    @ManyToOne(fetch = FetchType.EAGER)
    private Question question;
}
