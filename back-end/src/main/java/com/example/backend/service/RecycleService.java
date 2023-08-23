package com.example.backend.service;

import com.example.backend.dto.RecycleDTO;
import com.example.backend.entity.RecycleEntity;
import com.example.backend.repository.RecycleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RecycleService {

    private final RecycleRepository recycleRepository;

    public Integer uploadRecycle(RecycleDTO recycleDTO){

        RecycleEntity recycle = RecycleEntity.builder()
                .title(recycleDTO.getTitle())
                .type(recycleDTO.getType())
                .location(recycleDTO.getLocation())
                .method(recycleDTO.getMethod())
                .content(recycleDTO.getContent())
                .image(recycleDTO.getImage())
                .view(0)
                .build();

        return recycleRepository.save(recycle).getRecycleId();
    }

    public Optional<RecycleEntity> getRecycleDetail(Integer recycleId){

        Optional<RecycleEntity> recycle = recycleRepository.findByRecycleId(recycleId);

        recycle.get().setView(recycle.get().getView()+1);

        recycleRepository.save(recycle.get());

        return recycle;
    }

    public List<RecycleEntity> getbestRecycleList(String location){

        List<RecycleEntity> bestRecycleList = recycleRepository.findTop3ByLocationOrderByViewDesc(location);

        return bestRecycleList;
    }

    public List<RecycleEntity> searchRecycle(String keyword){

        List<RecycleEntity> recycle = recycleRepository.findByTitleContaining(keyword);

        return recycle;
    }
}
