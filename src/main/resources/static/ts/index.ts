import { deleteUser } from './deleteUser.js';
import { cargarUsuarios } from './loadUsers.js';
import { loginUser } from './loginUser';
import { registerNewUser } from './register';

$(document).ready(function() {
	cargarUsuarios();
	$('#usuarios').DataTable();

	let btn = document.querySelector('#btn-to-register')!
	btn.addEventListener('click', registerNewUser);


	let btn1 = document.querySelector('#btn-to-login')!
	btn1.addEventListener('click', loginUser);
});

function getHeaders () {
	return {
				'Accept': "application/json",
				'Content-Type': 'application/json',
				'Authorization': localStorage.token
	}
	
}
