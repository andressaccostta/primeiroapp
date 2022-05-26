import styled from "styled-components";

export const DivPersonalizada = styled.div`
        width: ${props => props.width } ; // propriedades
        border: ${props => props.border } ;
        padding: 55px; // padding fixo de 25 pixel
        margin: ${props => props.margin } ;
        margin-top: ${props => props.marginTop } ;
        background: ${props => props.background};
        color: ${props => props.color};
        font-size: 18px;
        border-radius: 15px;
        


        h1 {
                color: #5f99ea;
                font-family: Arial;
                font-size: 40px;
                text-align: center;
                margin-top: 10px;
                margin-bottom: 30px;
        }

       


       .esqueci-senha{
              text-align: right;
              color: white;
              font-size: 15px;
              font-style: italic;
       }

`;