package com.example.backend.entity;

import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class RecycleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer recycleId;

    @Column(nullable = false, length=100)
    private String title;

    @Column(nullable = false, length=150)
    private String type;

    @Column(columnDefinition="TEXT")
    private String method;

    @Column(columnDefinition="TEXT")
    private String content;

    @Column(columnDefinition="TEXT")
    private String image;

    @Column(nullable = false)
    private Integer view;

    @Column(nullable = false)
    private Boolean school;

    @Column(nullable = false)
    private Boolean home;
}
