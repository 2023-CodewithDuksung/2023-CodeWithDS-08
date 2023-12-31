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
                .method(recycleDTO.getMethod())
                .content(recycleDTO.getContent())
                .image(recycleDTO.getImage())
                .school(recycleDTO.getSchool())
                .home(recycleDTO.getHome())
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

    public List<RecycleEntity> getbestRecycleList(){

        List<RecycleEntity> bestRecycleList = recycleRepository.findTop3ByOrderByViewDesc();

        return bestRecycleList;
    }

    public List<RecycleEntity> searchRecycle(String keyword){

        List<RecycleEntity> recycle = recycleRepository.findByTitleContaining(keyword);

        return recycle;
    }

    public List<RecycleEntity> getSchoolSelect(){

        List<RecycleEntity> schoolRecycle = recycleRepository.findBySchoolTrue();

        return schoolRecycle;
    }

    public List<RecycleEntity> getHomeSelect(){

        List<RecycleEntity> homeRecycle = recycleRepository.findByHomeTrue();

        return homeRecycle;
    }
}
