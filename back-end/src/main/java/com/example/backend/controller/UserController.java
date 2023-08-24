package com.example.backend.controller;

import com.example.backend.dto.UserDTO;
import com.example.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Controller
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @PostMapping("/join")
    public String Join(@RequestBody UserDTO userDTO){
        String userId = userService.join(userDTO);

        return userId;
    }

    @PostMapping("/login")
    public String login(@RequestBody UserDTO userDTO){
        String userId = userService.login(userDTO);

        return userId;
    }



}
