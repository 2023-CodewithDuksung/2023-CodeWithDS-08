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
            return "중복 ID가 존재합니다.";
        }
        return userRepository.save(user).getUserId();
    }

    public String login(UserDTO userDTO) {

        Optional<UserEntity> findUser = userRepository.findByUserId(userDTO.getUserId());

        if(!findUser.isPresent()){
            return "ID가 존재하지 않습니다.";
        }
        else if (!findUser.get().getPassword().equals(userDTO.getPassword())){
            return "비밀번호가 일치하지 않습니다.";
        }

        return findUser.get().getUserId();
    }

}
