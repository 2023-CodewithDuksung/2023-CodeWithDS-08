package com.example.backend.service;

import com.example.backend.entity.TrashcanEntity;
import com.example.backend.repository.TrashcanRepository;
import com.example.backend.dto.TrashcanDTO;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;


@Service
public class TrashcanService {
    private TrashcanRepository trashcanRepository;

    public TrashcanService(TrashcanRepository trashcanRepository) {
        this.trashcanRepository = trashcanRepository;
    }


    /*
    @Transactional
    public Long savePost(TrashcanDTO trashcanDto) {
        return trashcanRepository.save(trashcanDto.toEntity()).getTrashcanId(); // 게시글 저장하고 trashcanid가져오기
    }*/
}
