package com.example.backend.service;

import com.example.backend.entity.PostEntity;
import com.google.cloud.storage.Blob;
import com.google.firebase.cloud.StorageClient;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.google.cloud.storage.Bucket;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FireBaseService {

    @Value("${app.firebase-bucket}")
    private String firebaseBucket;

    public String uploadFile(MultipartFile file) throws IOException {
        Bucket bucket = StorageClient.getInstance().bucket(firebaseBucket);
        InputStream content = new ByteArrayInputStream(file.getBytes());
        Blob blob = bucket.create(file.getOriginalFilename().toString(), content, file.getContentType());

        return blob.getMediaLink();
    }

    public List<String> uploadFiles(List<MultipartFile> multipartFiles) throws IOException {
        Bucket bucket = StorageClient.getInstance().bucket(firebaseBucket);

        List<String> storeFileResult = new ArrayList<>();

        for (MultipartFile multipartFile : multipartFiles) {
            if(!multipartFile.isEmpty()) {
                InputStream content = new ByteArrayInputStream(multipartFile.getBytes());
                Blob blob = bucket.create(multipartFile.getOriginalFilename().toString(), content, multipartFile.getContentType());
                storeFileResult.add(blob.getMediaLink());
            }
        }

        return storeFileResult;
    }

    //, String nameFile
}
