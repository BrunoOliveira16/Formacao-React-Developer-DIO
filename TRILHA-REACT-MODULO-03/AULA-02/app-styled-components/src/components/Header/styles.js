import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    min-width: 80%;
    height: 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .75rem;
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
    padding: 5px;
`

export const BuscarInputContainer = styled.div `
    width: 11rem;
    height: 2rem;
    background: #2D2D37;
    border-radius: 8px;
    padding: 4px 10px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Menu = styled.a `
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-size: 1.2rem;
    line-height: 1.5rem
    color: #FFFFFF;
    margin-right: .75rem;
    text-decoration: none;
`

export const MenuRight = styled.a `
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: #FFFFFF;
    margin-right: .75rem;
    text-decoration: none;
`

export const UserPicture = styled.img `
    width: 2rem;
    height: 2rem;
    border: 2px solid #FFFFFF;
    border-radius: 1.375rem;
`

export const Input = styled.input `
    background: transparent;
    flex: 1;
    border: 0;
    color: #FFFFFF;
`