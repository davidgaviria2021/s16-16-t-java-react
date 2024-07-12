package com.s16_16_t_java_react.backend.entities;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



import lombok.AllArgsConstructor;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Usuarios")
public class Usuarios {
    @Id
    @Column(name="idusuario", unique = true, nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable = false)
    @Nonnull
    private String email;
    @Column(nullable = false)
    @Nonnull
    private String telefono;
    @Column(nullable = false)
    @Nonnull
    private String password;    //Hay que cambiar la variable "contraseña" de la BD.
}
