import styled from 'styled-components';
import arrow from 'images/arrow.png';
import bg from 'images/bg.png';
import { Form, Field, ErrorMessage } from 'formik';

export const Button = styled.button`
    position: absolute;
    top: 50%;
    left:0%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    text-indent: 120%;
    overflow: hidden;
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
        content: '';
        position: absolute;
        top: 15px;
        left: 12px;
        width: 25px;
        height: 19px;
        background: url(${arrow}) 0 0 no-repeat;
        background-repeat: no-repeat;
        background-size: contain;
        background-position-x: 2px;
        }
`
export const ButtonWrapper = styled.p`
    position: absolute;
    top: 50%;
    left: calc(50% + 120px);
    width: 48px;
    height: 48px;
    padding: 8px;
    border-radius: 32px;
    -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.35);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.35);
    transform: translateY(-50%);
    background-color: #504f4f;
`
export const Input = styled(Field)`
    height: 40px;
    width: 300px;
    padding: 0 10px;
    outline: gray;
    background: rgba(0, 0, 0, 0.20);

    font-size: 20px;
    color: #bbb;
    text-shadow: 1px 1px 1px black;

    border: 0;
    border-radius: 5px;
    -webkit-box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.3),
    0 1px rgba(255, 255, 255, 0.06);
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.3),
    0 1px rgba(255, 255, 255, 0.06);

  :focus {
    color: white;
    background: rgba(0, 0, 0, 0.1);
    outline: 0;
  }
`
export const SearchForm = styled(Form)`
    position: relative;
`
export const SearchFormik = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    height: 60px;
    background: #373737 url(${bg}) 0 0 repeat;  text-align: center;
    padding-top: 10px;
`
export const Error = styled(ErrorMessage)`
    position: absolute;
    top: 45px;
    left: 50%;
    background: #ffffff;
    transform: translateX(-50%);
    padding: 0 10px;
`
