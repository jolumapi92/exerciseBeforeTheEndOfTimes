package com.example.exerciseBeforeTheEndOfTimes.controllers;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.exerciseBeforeTheEndOfTimes.Models.User;
import com.example.exerciseBeforeTheEndOfTimes.dao.UsuarioDAO;
import com.example.exerciseBeforeTheEndOfTimes.utils.JWTUtil;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import de.mkammerer.argon2.Argon2Factory.Argon2Types;

@RestController
public class UsuarioController {
	
	
	@Autowired
	private UsuarioDAO usuarioDAO;
	
	@Autowired
	private JWTUtil jwtUtil;
	
	@RequestMapping(value = "api/usuarios")
	public List<User> getAll( @RequestHeader(value="Authorization") String token ) {
		
		String userID = jwtUtil.getKey(token);
		String other = jwtUtil.getValue(token);
		
		System.out.println(userID);
		System.out.println(other);
		
		if ( userID != null  ) {
			List<User> usersList = usuarioDAO.getAllUsers();
			return usersList;
		} else {
			List list = new ArrayList();
			return list;
		}
		
		
	}
	
	@RequestMapping( value = "api/usuarios", method = RequestMethod.POST )
	public void createOneUser(@RequestBody User usuario) {
		Argon2 argon2 = Argon2Factory.create( Argon2Factory.Argon2Types.ARGON2id );
		String hash = argon2.hash(1, 1024, 1, usuario.getPassword());
		usuario.setPassword(hash);
		usuarioDAO.registrar(usuario);
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
