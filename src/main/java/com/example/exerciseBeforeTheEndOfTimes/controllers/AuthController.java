package com.example.exerciseBeforeTheEndOfTimes.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.exerciseBeforeTheEndOfTimes.Models.User;
import com.example.exerciseBeforeTheEndOfTimes.dao.UsuarioDAO;
import com.example.exerciseBeforeTheEndOfTimes.utils.JWTUtil;

@RestController
public class AuthController {
	
	@Autowired
	private UsuarioDAO usuarioDAO;
	
	@Autowired
	private JWTUtil jwtUtil;
	
	@RequestMapping( value = "api/login", method = RequestMethod.POST )
	public String login(@RequestBody User usuario) {
		
		User userLoggedIn = usuarioDAO.getUserByCredentials(usuario);
		
		if (userLoggedIn != null) {
			String token = jwtUtil.create(String.valueOf(userLoggedIn.getId()), userLoggedIn.getEmail());
			return token;
		} else {
			return "FAIL";
		}
	}	
	
}
