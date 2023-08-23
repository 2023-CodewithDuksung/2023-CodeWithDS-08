package com.example.backend.controller;


import com.example.backend.dto.TrashcanDTO;
import com.example.backend.service.TrashcanService;
import com.example.backend.entity.TrashcanEntity;
import com.example.backend.repository.TrashcanRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@Controller
@RequiredArgsConstructor
@RequestMapping("/api/map")
public class TrashcanController {

    @Autowired
    private TrashcanRepository trashcanRepository;
    @Autowired
    private TrashcanService trashcanService;

    // 1차 조회 (building기준)
    @GetMapping("/click")
    public List<TrashcanEntity> click(@RequestParam("building") String keyword){
        List<TrashcanEntity> buildingDtoList = trashcanService.clickBuilding(keyword);
        //model.addAttribute("buildingList", buildingDtoList);
        return buildingDtoList;
    }

    // 2차 조회 (floor기준)
    @GetMapping("/floor")
    public List<TrashcanEntity> clickFloor(@RequestParam("floor") Integer keyword){
        List<TrashcanEntity> floorEntityList = trashcanService.clickFloor(keyword);
        return floorEntityList;
    }

    // 3차 조회 (상세 페이지, id기준)


    // post (데이터 등록)
    @PostMapping("/create")
    @ResponseBody
    public Long createTrashcan(@RequestBody TrashcanDTO dto){
        System.out.println(dto.toString()); // 확인

        // dto entity 변환함
        TrashcanEntity entity = dto.toEntity();
        System.out.println(entity.toString());  // 확인

        // repository로 entity를 db에 저장함
        TrashcanEntity saved = trashcanRepository.save(entity);
        System.out.println(saved.toString());   // 확인

        return saved.getTrashcanId();
    }
}
