package com.example.exerciseBeforeTheEndOfTimes.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.exerciseBeforeTheEndOfTimes.Models.User;
import com.example.exerciseBeforeTheEndOfTimes.dao.UsuarioDAO;

@RestController
public class UsuarioController {
	
	
	@Autowired
	private UsuarioDAO usuarioDAO;
	
	@RequestMapping(value = "api/usuarios")
	public List<User> getAll() {
		
		List<User> usersList = usuarioDAO.getAllUsers();
		return usersList;
	}
	
	@RequestMapping(value = "api/usuario/{id}", method = RequestMethod.DELETE)
	public void eliminar(@PathVariable long id) {	
		usuarioDAO.deleteUser(id);
	}
	
	@RequestMapping(value = "usuarios/{id}")
	public User edit() {	
		User usuario = new User();
		
		return usuario;
	}
}
