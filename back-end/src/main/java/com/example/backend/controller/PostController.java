package com.example.backend.controller;

import com.example.backend.dto.PostDTO;
import com.example.backend.dto.UploadFileDTO;
import com.example.backend.entity.PostEntity;
import com.example.backend.service.FireBaseService;
import com.example.backend.service.PostService;
import com.example.backend.service.UploadFileService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.firebase.auth.FirebaseAuthException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@Controller
@RequiredArgsConstructor
@RequestMapping("/api/post")
public class PostController {

    private final PostService postService;
    private final FireBaseService fireBaseService;
    private final UploadFileService uploadFileService;

    @PostMapping("/upload")
    public String uploadPost(@RequestParam("content") String postDTO, @RequestParam("images") List<MultipartFile> multipartfiles) throws JsonProcessingException, IOException {

        ObjectMapper mapper = new ObjectMapper();
        PostDTO mapperPostDTO = mapper.readValue(postDTO, PostDTO.class);

        List<String> imageFiles = uploadFileService.storeFiles(multipartfiles);

        mapperPostDTO.setImageArray(imageFiles.toString());

        String post = postService.uploadPost(mapperPostDTO);

        return post;
    }

    @GetMapping("/list")
    public List<PostEntity> postList(){

        List<PostEntity> postList = postService.postList();

        return postList;
    }

    @GetMapping("/detail")
    public Optional<PostEntity> postDetail(@RequestParam("postId")Integer postId){

        Optional<PostEntity> post = postService.postDetail(postId);

        return post;
    }

    @GetMapping("/search")
    public List<PostEntity> searchPost(@RequestParam("keyword")String keyword){

        List<PostEntity> searchList = postService.searchPost(keyword);

        return searchList;
    }

    @PostMapping("/uploadfire")
    public String uploadPostFire(@RequestParam("content") String postDTO, @RequestParam("images") List<MultipartFile> multipartfiles) throws JsonProcessingException, IOException {

        ObjectMapper mapper = new ObjectMapper();
        PostDTO mapperPostDTO = mapper.readValue(postDTO, PostDTO.class);

        List<String> imageFiles = fireBaseService.uploadFiles(multipartfiles);

        mapperPostDTO.setImageArray(imageFiles.toString());

        String post = postService.uploadPost(mapperPostDTO);

        return post;
    }

    @PostMapping("/files")
    public String uploadFile(@RequestParam("file") MultipartFile file, String nameFile)
        throws IOException, FirebaseAuthException{
        if (file.isEmpty()){
            return "empty";
        }
        return fireBaseService.uploadFile(file);
    }

}
