$(document).ready( function(){
	console.log("ready");
	const btn = document.querySelector('#btn-to-register');
	console.log(btn)
	btn.addEventListener('click', registerNewUser);
	

});


async function registerNewUser(e) {
	console.log(e)
	e.preventDefault();
	let datos = {};
	
	datos.name = document.querySelector("#Name").value
	datos.age = document.querySelector("#Age").value
	datos.email = document.querySelector('#Email').value
	datos.phone = document.querySelector('#Phone').value
	datos.password = document.querySelector('#Password').value
	
	console.log(datos);
	
	const request = await fetch("api/usuarios", {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(datos)
	});
	alert("The account has been successfully created");	
	
}