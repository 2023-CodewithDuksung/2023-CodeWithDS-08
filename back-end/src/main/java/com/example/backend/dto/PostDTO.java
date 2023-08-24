package com.example.backend.dto;

import com.example.backend.entity.PostEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import reactor.util.annotation.Nullable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostDTO {

    @Nullable
    private String writer;

    @Nullable
    private String title;

    @Nullable
    private String content;

    @Nullable
    private String imageArray;

//    public PostDTO toPostDTO(PostEntity postEntity){
//        PostDTO postDTO = new PostDTO();
//        postDTO.setTitle(postEntity.getTitle());
//        postDTO.setContent(postEntity.getContent());
//        postDTO.setImageArray(postEntity.getImageArray());
//        return postDTO;
//    }


}
