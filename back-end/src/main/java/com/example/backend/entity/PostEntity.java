package com.example.backend.entity;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class PostEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer postId;

    @ManyToOne
//    @JoinColumn(name="userId")
    private UserEntity writer;

    @CreatedDate
    private LocalDateTime createAt;

    @Column(nullable = false, length=150)
    private String title;

    @Column(columnDefinition="TEXT")
    private String content;

    @Column(columnDefinition="TEXT")
    private String imageArray;
}
