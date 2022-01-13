import { cargarUsuarios } from './loadUsers.js';
import { loginUser } from './loginUser.js';
import { registerNewUser } from './register.js';

$(document).ready(function () {
    cargarUsuarios();
    $('#usuarios').DataTable();
    let btn = document.querySelector('#btn-to-register');
    btn.addEventListener('click', registerNewUser);
    let btn1 = document.querySelector('#btn-to-login');
    btn1.addEventListener('click', loginUser);

});

async function deleteUser (id) {

	if( confirm("Do you want to delete this user" + id) ) {
	
		let content = await fetch('api/usuario/' + id, {
			method: "DELETE",
			headers: getHeaders()
		});
		
		window.location.reload()
	}
}
