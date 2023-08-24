package com.example.backend.dto;

import com.example.backend.entity.RecycleEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import reactor.util.annotation.Nullable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RecycleDTO {

    @Nullable
    private String title;

    @Nullable
    private String type;

    @Nullable
    private String method;

    @Nullable
    private String content;

    @Nullable
    private String image;

    @Nullable
    private Integer view;

    @Nullable
    private Boolean school;

    @Nullable
    private Boolean home;

    public RecycleDTO torecycleDTO(RecycleEntity recycleEntity){
        RecycleDTO recycleDTO = new RecycleDTO();
        recycleDTO.setTitle(recycleEntity.getTitle());
        recycleDTO.setType(recycleEntity.getType());
        recycleDTO.setMethod(recycleEntity.getMethod());
        recycleDTO.setMethod(recycleEntity.getContent());
        recycleDTO.setImage(recycleEntity.getImage());
        recycleDTO.setView(recycleEntity.getView());
        recycleDTO.setSchool(recycleEntity.getSchool());
        recycleDTO.setHome(recycleEntity.getHome());
        return recycleDTO;
    }
}
