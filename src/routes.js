// Importar o React
import React from "react";

// Importar as propriedades do react-router-dom
import {Routes, Route} from "react-router-dom";

//Importar nossas pages
import Principal from "./pages/principal";
import Detalhes from "./pages/detalhes";
import Login from './pages/login';

// Criar um componente chamado Routes que vai ter as configurações das nossas rotas
export default function MainRoutes() {
    return(
        <Routes>
            <Route path = '/' element = {<Principal/>} />
            <Route path = '/detalhes' element = {<Detalhes/>} />
            <Route path = '/login' element = {<Login/>} />
            
        </Routes>
            
    );
}