package com.example.backend.entity;

import lombok.*;
import javax.persistence.*;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TrashcanEntity {

    @Id
    private Long trashcanId;

    private String building;

    // 보이는 정보
    private Integer floor;

    private Integer count;  // 층 기준 개수

    @Column(length=50)
    private String icon;

    @Column(length=500)
    private String location;

    @Column(length=500)
    private String type;

    @Column(columnDefinition = "TEXT")
    private String image;

    public Long getTrashcanId() {
        return trashcanId;
    }

}
