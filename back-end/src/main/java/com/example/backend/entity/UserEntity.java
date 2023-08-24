package com.example.backend.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity {

    @Id
    @Column(nullable = false, length=100)
    private String userId;

    @Column(nullable = false, length=100)
    private String password;

    @Column(nullable = false, length=100)
    private String email;

    @Column(nullable = false, length=50)
    private String nickName;

}
