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

export { cargarUsuarios };