package com.example.backend.entity;

import lombok.*;
import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TrashcanEntity {

    @Id
    @GeneratedValue
    private Long TrashcanId;    // Q : 직접 키 생성 못함. 지금 자동 생성 중

    private String building;

    // 보이는 정보
    private Integer floor;

    private Integer count;  // 층 기준 개수  // Q : building -> floor 기준 1씩 증가해야함.

    @Column(length=50)
    private String icon;

    @Column(length=500)
    private String location;

    @Column(length=500)
    private String type;

    @Column(columnDefinition = "TEXT")
    private String image;

    public Long getTrashcanId() {
        return TrashcanId;
    }

}
