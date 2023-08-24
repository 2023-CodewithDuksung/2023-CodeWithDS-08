package com.example.backend.service;

import com.example.backend.dto.PostDTO;
import com.example.backend.entity.PostEntity;
import com.example.backend.entity.UserEntity;
import com.example.backend.repository.PostRepository;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostService {

    private final UserRepository userRepository;
    private final PostRepository postRepository;

    public String uploadPost(PostDTO postDTO){

        System.out.println(postDTO.getWriter());

        Optional<UserEntity> user = userRepository.findByUserId(postDTO.getWriter());
        System.out.println(user.get());

        PostEntity post = PostEntity.builder()
                .writer(user.get())
                .title(postDTO.getTitle())
                .content(postDTO.getContent())
                .imageArray(postDTO.getImageArray())
                .build();

        postRepository.save(post);

        return "업로드 성공";
    }

    public List<PostEntity> postList(){

        List<PostEntity> postList = postRepository.findAllByOrderByPostIdDesc();



        return postList;
    }

    public Optional<PostEntity> postDetail(Integer postId){

        Optional<PostEntity> post = postRepository.findByPostId(postId);

        return post;
    }

    public List <PostEntity> searchPost(String keyword) {

        List<PostEntity> searchList = postRepository.findByTitleContaining(keyword);

        return searchList;
    }

}
