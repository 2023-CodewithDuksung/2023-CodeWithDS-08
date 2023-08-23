package com.example.backend.dto;

import com.example.backend.entity.CommentEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import reactor.util.annotation.Nullable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommentDTO {

    @Nullable
    private String writer;

    @Nullable
    private Integer postId;

    @Nullable
    private String content;

    public CommentDTO toCommentDTO(CommentEntity commentEntity){
        CommentDTO commentDTO = new CommentDTO();
        commentDTO.setContent(commentEntity.getContent());
        return commentDTO;
    }
}
