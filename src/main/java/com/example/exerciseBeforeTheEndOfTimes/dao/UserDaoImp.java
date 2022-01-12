package com.example.exerciseBeforeTheEndOfTimes.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.exerciseBeforeTheEndOfTimes.Models.User;


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

}
