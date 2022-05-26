import React from "react";

import "./index.css";

import { Link } from 'react-router-dom';

export default class Principal extends React.Component {

    render(){
        return(
            <div>
                <h1>Pagina Principal</h1>

                





                <Link to={'/detalhes'}>Ir para pagina DETALHES</Link>
                <br></br>
                <Link to={'/login'}>Faça login por favor</Link>
            </div>
        
            );

        }
    
    }




