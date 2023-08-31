package com.bufferoverflow.BufferOverflow.question;

import com.bufferoverflow.BufferOverflow.tag.Tag;
import com.bufferoverflow.BufferOverflow.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;
import java.util.Set;

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
    @Column(length = 2048)
    private String body;
    private Integer upvotes;
    @CreationTimestamp
    private Date publicationDateTime;
    @ManyToOne(fetch = FetchType.EAGER)
    private User user;
    @ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @JoinTable(name = "Questions_Tags", joinColumns = {
            @JoinColumn(name = "question_id", referencedColumnName = "id")}, inverseJoinColumns = {
            @JoinColumn(name = "tag_id", referencedColumnName = "id")})
    private Set<Tag> tags;
}
