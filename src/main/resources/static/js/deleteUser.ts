async function deleteUser (id) {

	if( confirm("Do you want to delete this user" + id) ) {
	
		let content = await fetch('api/usuario/' + id, {
			method: "DELETE",
			headers: getHeaders()
		});
		
		window.location.reload()
	}
}

export { deleteUser };