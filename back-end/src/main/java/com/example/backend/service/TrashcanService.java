package com.example.backend.service;

import com.example.backend.entity.TrashcanEntity;
import com.example.backend.repository.TrashcanRepository;
import com.example.backend.dto.TrashcanDTO;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import java.util.List;


@Service
public class TrashcanService {
    @Autowired
    private TrashcanRepository trashcanRepository;

    public TrashcanService(TrashcanRepository trashcanRepository) {
        this.trashcanRepository = trashcanRepository;
    }

    // 클릭 기능 3개
    @Transactional
    public List<TrashcanEntity> clickBuilding(String keyword) {
        List<TrashcanEntity> buildings = trashcanRepository.findByBuildingContaining(keyword);
        return buildings;
    }

    @Transactional
    public List<TrashcanEntity> getPage(String building, Integer floor) {
        List<TrashcanEntity> pages = trashcanRepository.findAllByBuildingAndFloor(building, floor);
        return pages;
    }

    @Transactional
    public List<TrashcanEntity> clickId(Long keyword) {
        List<TrashcanEntity> Id = trashcanRepository.findAllByTrashcanId(keyword);
        return Id;
    }

    // 검색 기능 : type기준
    @Transactional
    public List<TrashcanEntity> searchType(String keyword) {
        List<TrashcanEntity> types = trashcanRepository.findByTypeContaining(keyword);
        return types;
    }

    // count : building, floor 기준
    public Long getCount(String building, Integer floor){
        Long count = trashcanRepository.countByBuildingAndFloor(building, floor);
        return count;
    }



    private TrashcanDTO convertEntityToDto(TrashcanEntity b){
        TrashcanDTO build = TrashcanDTO.builder()
                .trashcanId(b.getTrashcanId())
                .building(b.getBuilding())
                .floor(b.getFloor())
                .count(b.getCount())
                .icon(b.getIcon())
                .location(b.getLocation())
                .type(b.getType())
                .image(b.getImage())
                .build();
        return build;
    }
}
