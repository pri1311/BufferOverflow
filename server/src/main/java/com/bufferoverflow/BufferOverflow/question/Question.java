package com.bufferoverflow.BufferOverflow.question;

import com.bufferoverflow.BufferOverflow.user.User;
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
@Table(name = "questions")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String title;
    private String body;
    private Integer upvotes;
    @CreationTimestamp
    private Date publicationDateTime;
    @ManyToOne(fetch = FetchType.EAGER)
    private User user;
}
