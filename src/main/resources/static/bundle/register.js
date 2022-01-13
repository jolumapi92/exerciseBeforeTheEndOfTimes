var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function registerNewUser(e) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(e);
        e.preventDefault();
        let datos = {};
        datos.name = document.querySelector("#Name").value;
        datos.age = document.querySelector("#Age").value;
        datos.email = document.querySelector('#Email').value;
        datos.phone = document.querySelector('#Phone').value;
        datos.password = document.querySelector('#Password').value;
        console.log(datos);
        const request = yield fetch("api/usuarios", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });
        alert("The account has been successfully created");
    });
}
export { registerNewUser };
