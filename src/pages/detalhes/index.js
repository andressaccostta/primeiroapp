import React from "react";
import "./index.css";

import { Link } from 'react-router-dom';
export default class Detalhes extends React.Component{

    render(){
        return (
            <div>
                <h1>Pagina de Detalhes</h1>
                <Link to={'/'}>Ir para Pagina PRINCIPAL</Link>
                
            </div>
        );
    }
}