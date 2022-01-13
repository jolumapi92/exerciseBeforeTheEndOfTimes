$(document).ready( function() {

	const btn = document.querySelector('#btn-to-login');
	console.log(btn)
	btn.addEventListener('click', loginUser);

}) 



async function loginUser(e) {
	console.log(e)
	e.preventDefault();
	let datos = {};
	
	datos.email = document.querySelector('#email-login').value
	datos.password = document.querySelector('#password-login').value
	
	console.log(datos);
	
	const request = await fetch("api/login", {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(datos)
	});
	const response = await request.text();
	
	if(response != "FAIL") {
		localStorage.token = response;
		window.location.replace('usuarios.html');
	} else {
		alert('Not the right credentials. Please Try again.');
	}
}