package com.example.backend.controller;

import com.example.backend.dto.RecycleDTO;
import com.example.backend.entity.RecycleEntity;
import com.example.backend.service.RecycleService;
import com.example.backend.service.UploadFileService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@Controller
@RequiredArgsConstructor
@RequestMapping("/api/recycle")
public class RecycleController {

    private final UploadFileService uploadFileService;
    private final RecycleService recycleService;

    @PostMapping("/upload")
    public Integer uploadRecycle(@RequestParam("content") String recycleDTO,@RequestParam("image") MultipartFile multipartfile) throws IOException {

        ObjectMapper mapper = new ObjectMapper();
        RecycleDTO mapperRecycleDTO = mapper.readValue(recycleDTO, RecycleDTO.class);

        String imageFile = uploadFileService.storeFile(multipartfile);
        mapperRecycleDTO.setImage(imageFile);

        Integer recycle = recycleService.uploadRecycle(mapperRecycleDTO);

        return  recycle;
    }

    @GetMapping("/detail")
    public Optional<RecycleEntity> getRecycleDetail(@RequestParam("recycleId")Integer recycleId){

        Optional<RecycleEntity> recycle = recycleService.getRecycleDetail(recycleId);

        return recycle;
    }

    @GetMapping("/best")
    public List<RecycleEntity> getBestRecycleList(@RequestParam("location") String location){

        List<RecycleEntity> bestRecycleList = recycleService.getbestRecycleList(location);

        return bestRecycleList;
    }

    @GetMapping("/search")
    public List<RecycleEntity> searchRecycle(@RequestParam("keyword") String keyword) {

        List<RecycleEntity> recycle = recycleService.searchRecycle(keyword);

        return recycle;
    }
}
