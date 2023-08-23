package com.example.backend.repository;

import com.example.backend.entity.TrashcanEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

//CrudRepository<TrashcanEntity, Long>

public interface TrashcanRepository extends JpaRepository<TrashcanEntity, Long> {

}
