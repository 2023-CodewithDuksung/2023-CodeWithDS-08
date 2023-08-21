package com.example.backend.dto;

import com.example.backend.entity.UserEntity;
import lombok.*;
import reactor.util.annotation.Nullable;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    @Nullable
    private String userId;

    @Nullable
    private String password;

    @Nullable
    private String email;

    @Nullable
    private String nickName;

    public static UserDTO toUserDTO(UserEntity userEntity){
        UserDTO userDTO = new UserDTO();
        userDTO.setUserId(userEntity.getUserId());
        userDTO.setPassword(userEntity.getPassword());
        userDTO.setEmail(userEntity.getEmail());
        userDTO.setNickName(userEntity.getNickName());
        return userDTO;
    }

}
