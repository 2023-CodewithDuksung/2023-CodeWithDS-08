package com.example.backend.service;

import com.example.backend.dto.CommentDTO;
import com.example.backend.entity.CommentEntity;
import com.example.backend.entity.PostEntity;
import com.example.backend.entity.UserEntity;
import com.example.backend.repository.CommentRepository;
import com.example.backend.repository.PostRepository;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final UserRepository userRepository;
    private final PostRepository postRepository;
    private final CommentRepository commentRepository;

    public Integer writeComment(CommentDTO commentDTO){

        Optional<UserEntity> user = userRepository.findByUserId(commentDTO.getWriter());
        Optional<PostEntity> post = postRepository.findByPostId(commentDTO.getPostId());

        CommentEntity comment = CommentEntity.builder()
                .writer(user.get())
                .postId(post.get())
                .content(commentDTO.getContent())
                .build();

        return commentRepository.save(comment).getCommentId();
    }

    public List<CommentEntity> getCommentList(Integer postId){

        Optional<PostEntity> post = postRepository.findByPostId(postId);
        List<CommentEntity> commentList = commentRepository.findByPostId(post.get());

        return commentList;
    }
}
