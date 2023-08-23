package com.example.backend.controller;

import com.example.backend.dto.CommentDTO;
import com.example.backend.entity.CommentEntity;
import com.example.backend.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.xml.stream.events.Comment;
import java.util.List;

@RestController
@Controller
@RequiredArgsConstructor
@RequestMapping("/api/comment")
public class CommentController {

    private final CommentService commentService;

    @PostMapping("/write")
    public Integer writeComment(@RequestBody CommentDTO commentDTO){
        Integer comment = commentService.writeComment(commentDTO);

        return  comment;
    }

    @GetMapping("/list")
    public List<CommentEntity> getCommentList(@RequestParam("postId")Integer postId){
        List<CommentEntity> commentList = commentService.getCommentList(postId);

        return commentList;
    }
}
