package com.s16_16_t_java_react.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.s16_16_t_java_react.backend.entities.Usuario;
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    
}
