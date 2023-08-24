package com.example.backend.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.ObjectMetadata;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AmazonS3Service {

//    private final AmazonS3 amazonS3;

    private final AmazonS3Client amazonS3Client;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    public String saveFile(MultipartFile multipartFile) throws IOException {
        String originalFilename = multipartFile.getOriginalFilename();

        String storeFilename = UUID.randomUUID() + "." + extractExt(originalFilename);

        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentLength(multipartFile.getSize());
        metadata.setContentType(multipartFile.getContentType());

        System.out.println(bucket);

        amazonS3Client.putObject(bucket, storeFilename, multipartFile.getInputStream(), metadata);

        System.out.println(amazonS3Client.getUrl(bucket, storeFilename).toString());
        return amazonS3Client.getUrl(bucket, storeFilename).toString();
    }

    public List<String> saveFiles(List<MultipartFile> multipartFiles) throws IOException {

        List<String> storeFileResult = new ArrayList<>();

        for (MultipartFile multipartFile : multipartFiles) {
            if(!multipartFile.isEmpty()) {
                storeFileResult.add(saveFile(multipartFile));
            }
        }
        return storeFileResult;
    }

    private String extractExt(String originalFilename) {
        int pos = originalFilename.lastIndexOf(".");
        return originalFilename.substring(pos + 1);
    }
}
