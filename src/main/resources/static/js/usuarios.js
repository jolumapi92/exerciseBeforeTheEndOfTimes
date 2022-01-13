// Call the dataTables jQuery plugin
$(document).ready(function() {
	cargarUsuarios();
  $('#usuarios').DataTable();
});


async function cargarUsuarios() {
	let content = await fetch('api/usuarios', {
		method: "GET",
		headers: getHeaders()
	});
	
	let usuarios = await content.json();
	let wholeList = "";
	usuarios.forEach( user => {
	let btnDelete = `<a onclick="deleteUser(${ user.id })" href="#" class="btn btn-danger btn-circle btn-sm">
									<i class="fas fa-trash"></i>
					</a>`;
		let usuario = `
						<tr>
							<td>${user.id}</td>
							<td>${user.name}</td>
							<td>${user.email}</td>
							<td>${user.phone}</td>
							<td>${user.age}</td>
							<td>
							${btnDelete}
							</td>
						</tr>
						`;
		wholeList += usuario;
	});
	document.querySelector("#usuarios tbody").outerHTML = wholeList;
}

function getHeaders () {
	return {
				'Accept': "application/json",
				'Content-Type': 'application/json',
				'Authorization': localStorage.token
	}
	
}

async function deleteUser (id) {

	if( confirm("Do you want to delete this user" + id) ) {
	
		let content = await fetch('api/usuario/' + id, {
			method: "DELETE",
			headers: getHeaders()
		});
		
		window.location.reload()
	}
}