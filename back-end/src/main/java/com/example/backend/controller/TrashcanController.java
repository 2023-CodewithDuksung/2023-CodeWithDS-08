package com.example.backend.controller;


import com.example.backend.dto.TrashcanDTO;
import com.example.backend.service.TrashcanService;
import com.example.backend.entity.TrashcanEntity;
import com.example.backend.repository.TrashcanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

@Controller
@RequestMapping(value = "/api/map")
public class TrashcanController {

    @Autowired
    private TrashcanRepository trashcanRepository;
    private TrashcanService trashcanService;

    // 1차 조회 (building기준, floor기준)


    // 2차 조회 (상세 페이지, id기준)
    @GetMapping("/{TrashcanId}")
    public String show(@PathVariable Long TrashcanId, Model model) {
       System.out.println("id = " + TrashcanId); // 단순 확인

        TrashcanEntity trashcanEntity = trashcanRepository.findById(TrashcanId).orElse(null);
        model.addAttribute("Trashcan", trashcanEntity);

        return "";  //뷰 페이지 반환
    }

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
