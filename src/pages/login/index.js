import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import {Input, Button} from '../../styles/form-styles';
import { DivPersonalizada } from '../../styles/geral-styles';

import InputText from "../../components/InputText";
import usuarioService from "../../service/usuario-service";
import Swal from 'sweetalert2';





const Login = () => {
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");

const validarLogin = () => { 
  usuarioService.login(email, senha)
      Swal.fire({
      icon: 'info',
      title: 'Seja bem vindo(a)',
      color: 'white',
      background:  'black',
      text: 'Você será redirecionado para a página principal'
})

      .then(response => {
        console.log(response)
        window.open("/", "_self")

        Promise.catch(error => {
          console.log(error)  
      
         })

      })
      

}
return (
      <DivPersonalizada 
                        width="350px" 
                        margin="auto" 
                        border="1px #ddd"
                         margin-top="55px" 
                         text-align="center" 
                         display="table" 
                         padding-top="20px" 
                         background= "#98fb98"
                         color= "#5f99ea" 
                         >
                        <Link to= {'/'}>Voltar</Link> 
                        <h1>Login</h1>  
                        
                      
                        
                        <InputText
                        id="email"
                        placeholder="exemplo.com"
                        text="E-mail"
                        function= {(e)=> setEmail(e.target.value)}>
                        </InputText>
                        
                        <InputText
                        id="senha"
                        placeholder="123456"
                        text="Senha"
                        type="password"
                        function= {(e)=> setSenha(e.target.value)}>
                        </InputText>
                       

                      <Button onClick={validarLogin}>Entrar</Button>

            <div className="esqueci-senha">
            <a href="#">Esqueci minha senha</a>
            </div>
        </DivPersonalizada>

);

}

export default Login;

//1 Passo -> Importar os componentes que precisamos para o projeto
    //1.1 Style Component

//2 Passo -> Aprender a trabalhar com requisiçoes AJAX (HTTP)
    //2.2 Axios, fech API

//3 Passo -> Aprender a utilizar o localstorage

//4 Passo -> Trabalhar com Hook principalmente o (useState e useEffect)