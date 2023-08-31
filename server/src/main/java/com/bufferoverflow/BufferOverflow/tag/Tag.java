package com.bufferoverflow.BufferOverflow.tag;

import com.bufferoverflow.BufferOverflow.question.Question;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "tags")
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    @Column(length = 2048)
    private String description;
    @ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @JoinTable(name = "Questions_Tags", joinColumns = {
            @JoinColumn(name = "question_id", referencedColumnName = "id")}, inverseJoinColumns = {
            @JoinColumn(name = "tag_id", referencedColumnName = "id")})
    private Set<Question> questions;
}
