var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function cargarUsuarios() {
    return __awaiter(this, void 0, void 0, function* () {
        let content = yield fetch('api/usuarios', {
            method: "GET",
            headers: getHeaders()
        });
        let usuarios = yield content.json();
        let wholeList = "";
        usuarios.forEach(user => {
            let btnDelete = `<a onclick="deleteUser(${user.id})" href="#" class="btn btn-danger btn-circle btn-sm">
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
    });
}
export { cargarUsuarios };
