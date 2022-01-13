var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function loginUser(e) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(e);
        e.preventDefault();
        let datos = {};
        datos.email = document.querySelector('#email-login').value;
        datos.password = document.querySelector('#password-login').value;
        console.log(datos);
        const request = yield fetch("api/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });
        const response = yield request.text();
        if (response != "FAIL") {
            localStorage.token = response;
            window.location.replace('usuarios.html');
        }
        else {
            alert('Not the right credentials. Please Try again.');
        }
    });
}
export { loginUser };
