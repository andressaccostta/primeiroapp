import service from "./service";
import Swal from 'sweetalert2';

const usuarioMock = {
    id: 1,
    nome: "joao de tal",
    email: "joao@exemplo.com",
    perfil: {
        id: 1,
        descricao: "manager"
    }
    };


const autenticado = {
    token: "tokenacesso",
    usuario: "usuarioMock",
    senha: "123456",

};


function login(email, senha){
    return new Promise((resolve, reject) => {
        if ( email == "exemplo@exemplo.com" && senha == "123456") {
            
            resolve(autenticado).then(response => {
                console.log(response);
                window.open("/", "_self")
             })
}
        Promise.reject().catch(error=> {
            console.log(error);
            Swal.fire ({
            icon: 'error',
            title: 'OPA!!!!!!!!!!',
            color: 'white',
            background:  'black',
            text: 'Usuário ou Senha invalidos, tente novamente'
            })
        })


         })

}

// METODO REAL QUE VAI NA API TENTAR LOGAR O USUARIO
//function login(email, senha){
//return new Promise((resolve, reject) => {
//return service.post("/api/login", {email, senha})
//.then(response => resolve(response))
// .catch(error =>reject(error));
//})
//}



function obterTodos(){
    return new Promise((resolve, reject) => {
        return service.post("/api/usuarios")
        .then(response => resolve(response))
        .catch(error =>reject(error));
    })
}




export default {
    login,
    obterTodos
}