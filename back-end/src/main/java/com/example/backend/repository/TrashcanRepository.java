package com.example.backend.repository;

import com.example.backend.entity.TrashcanEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TrashcanRepository extends JpaRepository<TrashcanEntity, Long> {
    List<TrashcanEntity> findByBuildingContaining(String keyword);
    List<TrashcanEntity> findAllByFloor(final Integer keyword);
    List<TrashcanEntity> findAllByTrashcanId(final Long keyword);
    Long countByBuildingAndFloor(String building, Integer floor);
}
