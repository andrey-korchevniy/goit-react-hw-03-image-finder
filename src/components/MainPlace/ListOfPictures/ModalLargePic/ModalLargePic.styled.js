import styled from "styled-components";

export const PictureContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 90%;
    width: 85%;
    overflow: hidden;
`
export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.7);
    z-index: 999;
`
export const LargePic = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`
