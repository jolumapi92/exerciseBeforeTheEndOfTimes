package com.example.exerciseBeforeTheEndOfTimes.dao;

import java.util.List;

import com.example.exerciseBeforeTheEndOfTimes.Models.User;

public interface UsuarioDAO {
	List<User> getAllUsers();
	void deleteUser(long id);
	void registrar(User usuario);
	boolean authenticate(User usuario);
	User getUserByCredentials(User usuario);
}
