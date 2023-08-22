package com.bufferoverflow.BufferOverflow.auth;

import com.bufferoverflow.BufferOverflow.config.JWTService;
import com.bufferoverflow.BufferOverflow.user.Role;
import com.bufferoverflow.BufferOverflow.user.User;
import com.bufferoverflow.BufferOverflow.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTService jwtService;
    private final AuthenticationManager authenticationManager;
    public AuthenticationResponse register(RegisterRequest request) {
        User user = User
                .builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.ROLE_USER)
                .reputation(0)
                .build();
        userRepository.save(user);
        String jwtToken = jwtService.generateToken(user);
        Integer id = user.getId();
        return AuthenticationResponse.builder().token(jwtToken).uid(id).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        User user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        String jwtToken = jwtService.generateToken(user);
        Integer id = user.getId();
        return AuthenticationResponse.builder().token(jwtToken).uid(id).build();
    }
}
