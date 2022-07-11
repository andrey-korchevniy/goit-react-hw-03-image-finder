import styled from "styled-components";
import bg from 'images/bg.png';

export const Button = styled.button`
    position: absolute; 
    bottom: 0; 
    left: 50%; 
    transform: translateX(-50%); 
    width: 130px;
    height: 47px;
    background: none;
    border: 0;
    border-radius: 24px;
    cursor: pointer;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2), 0 1px rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2), 0 1px rgba(255, 255, 255, 0.1);

    :before {
        content: '';
        position: absolute;
        top: 5px;
        bottom: 5px;
        left: 5px;
        right: 5px;
        background: #00a2d3;
        border-radius: 24px;
        background-image: -webkit-linear-gradient(top, #00a2d3, #0d7796);
        background-image: -moz-linear-gradient(top, #00a2d3, #0d7796);
        background-image: -o-linear-gradient(top, #00a2d3, #0d7796);
        background-image: linear-gradient(to bottom, #00a2d3, #0d7796);
        -webkit-box-shadow: inset 0 0 0 1px #00a2d3, 0 0 0 5px rgba(0, 0, 0, 0.16);
        box-shadow: inset 0 0 0 1px #00a2d3, 0 0 0 5px rgba(0, 0, 0, 0.16);
        }

    :active:before {
        background: #0591ba;
        background-image: -webkit-linear-gradient(top, #0591ba, #00a2d3);
        background-image: -moz-linear-gradient(top, #0591ba, #00a2d3);
        background-image: -o-linear-gradient(top, #0591ba, #00a2d3);
        background-image: linear-gradient(to bottom, #0591ba, #00a2d3);
    }

     :after {
        content: 'LOAD MORE';
        font-size: 15px;
        color: white;
        position: absolute;
        top: 14px;
        left: 15px;
        width: 100px;
        height: 19px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position-x: 2px;
            text-align: center;
    } 
`
export const ButtonWrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #373737 url(${bg}) 0 0 repeat;  
    text-align: center;
`
export const Spinner = styled.div`
    position: absolute; 
    width: 35px;
    height: 35px;
    bottom: 10px; 
    left: 50%; 
    transform: translateX(-50%); 
    `