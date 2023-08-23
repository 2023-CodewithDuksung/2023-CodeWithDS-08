package com.example.backend.dto;

import com.example.backend.entity.TrashcanEntity;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class TrashcanDTO {

    private Long TrashcanId;
    private String building;

    private Integer floor;
    private Integer count;
    private String icon;

    private String location;
    private String type;
    private String image;


    /*public TrashcanEntity toEntity() {
        return new TrashcanEntity(TrashcanId, building, floor, count, icon, location , type);
    }*/

    public TrashcanEntity toEntity() {
        TrashcanEntity build = TrashcanEntity.builder()
                .TrashcanId(TrashcanId)
                .building(building)
                .floor(floor)
                .count(count)
                .icon(icon)
                .location(location)
                .type(type)
                .image(image)
                .build();
        return build;
    }
}
