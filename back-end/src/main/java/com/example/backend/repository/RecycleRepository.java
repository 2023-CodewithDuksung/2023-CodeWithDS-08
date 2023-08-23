package com.example.backend.repository;

import com.example.backend.entity.RecycleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RecycleRepository extends JpaRepository<RecycleEntity, Integer> {

    Optional<RecycleEntity> findByRecycleId(Integer RecycleId);

    List<RecycleEntity> findTop3ByLocationOrderByViewDesc(String location);

    List<RecycleEntity> findByTitleContaining(String keyword);
}
