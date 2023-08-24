package com.example.backend.repository;

import com.example.backend.entity.CommentEntity;
import com.example.backend.entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<CommentEntity, Integer> {

    List<CommentEntity> findByPostId(PostEntity postId);
}
