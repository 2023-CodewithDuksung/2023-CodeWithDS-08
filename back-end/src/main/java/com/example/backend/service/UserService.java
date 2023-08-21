package com.example.backend.service;

import com.example.backend.dto.UserDTO;
import com.example.backend.entity.UserEntity;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public String join(UserDTO userDTO) {

        UserEntity user = UserEntity.builder()
                .userId(userDTO.getUserId())
                .password(userDTO.getPassword())
                .email(userDTO.getEmail())
                .nickName(userDTO.getNickName())
                .build();

        Optional<UserEntity> findUser = userRepository.findByUserId(user.getUserId());
        if(findUser.isPresent()){
            return "회원가입 실패";
        }
        return userRepository.save(user).getUserId();
    }

}
