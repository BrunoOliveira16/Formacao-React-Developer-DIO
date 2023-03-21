import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    min-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
`

export const Column = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div `
    background-color: #151515;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
`

export const BuscarInputContainer = styled.div `
    width: 175px;
    height: 30px;
    background: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Menu = styled.a `
    font-familt: 'Open Sans';
    font-style: normal;
    font-size: 1.2rem;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
`

export const MenuRight = styled.a `
    font-familt: 'Open Sans';
    font-style: normal;
    font-size: 1.2rem;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
`

export const UserPicture = styled.img `
    width: 32px;
    height: 32px;
    border: 2px solid #FFFFFF;
    border-radius: 22px;
`

export const Input = styled.input `
    background: transparent;
    flex: 1;
    border: 0;
    color: #FFFFFF;
`