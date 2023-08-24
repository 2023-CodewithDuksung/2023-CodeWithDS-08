package com.example.backend.repository;

import com.example.backend.entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PostRepository extends JpaRepository<PostEntity, Integer> {

    Optional<PostEntity> findByPostId(Integer PostId);

    List<PostEntity> findAllByOrderByPostIdDesc();

    List<PostEntity> findByTitleContaining(String searchKeyword);

}
