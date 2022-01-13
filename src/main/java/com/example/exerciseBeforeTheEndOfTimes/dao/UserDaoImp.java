package com.example.exerciseBeforeTheEndOfTimes.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.exerciseBeforeTheEndOfTimes.Models.User;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;


@Repository
@Transactional
public class UserDaoImp implements UsuarioDAO {
	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	public List<User> getAllUsers() {
		String query = "FROM User";
		return entityManager.createQuery(query, User.class).getResultList();
	}

	@Override
	public void deleteUser(long id) {
		User usuario = entityManager.find(User.class, id);
		entityManager.remove(usuario);
	}

	@Override
	public void registrar(User usuario) {
		entityManager.merge(usuario);
	}

	@Override
	public boolean authenticate(User usuario) {
		String query = "FROM User WHERE email = :email";
		List<User> list =  entityManager.createQuery(query)
				.setParameter("email", usuario.getEmail())
				.getResultList();
		
		if ( list.isEmpty() ) {
			return false;
		} 
		
		String passwordHashed = list.get(0).getPassword();
		
		Argon2 argon2 = Argon2Factory.create( Argon2Factory.Argon2Types.ARGON2id );
		return argon2.verify(passwordHashed, usuario.getPassword());
	}

	@Override
	public User getUserByCredentials(User usuario) {
		String query = "FROM User WHERE email = :email";
		List<User> list =  entityManager.createQuery(query)
				.setParameter("email", usuario.getEmail())
				.getResultList();
		
		if ( list.isEmpty() ) {
			return null;
		} 
		
		String passwordHashed = list.get(0).getPassword();
		
		Argon2 argon2 = Argon2Factory.create( Argon2Factory.Argon2Types.ARGON2id );
		if( argon2.verify(passwordHashed, usuario.getPassword()) ) {
			return list.get(0);
		}
		return null;
	}
}
