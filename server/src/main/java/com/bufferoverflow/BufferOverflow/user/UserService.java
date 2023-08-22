package com.bufferoverflow.BufferOverflow.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User addReputation(Integer id, Integer reputation) {
        User user = userRepository.findById(id).get();
        user.setReputation(user.getReputation() + reputation);
        userRepository.save(user);
        return user;
    }
}
