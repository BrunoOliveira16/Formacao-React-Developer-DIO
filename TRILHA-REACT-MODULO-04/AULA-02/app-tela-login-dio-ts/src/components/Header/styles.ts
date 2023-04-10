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
    padding: .5rem 3rem;
`

export const BuscarInputContainer = styled.div `
    width: 15rem;
    height: 2.5rem;
    background: rgb(45, 45, 55);
    border-radius: 8px;
    padding: 4px 14px;
    margin: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Menu = styled.a `
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem
    color: #FFFFFF;
    margin-right: .75rem;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        color: rgb(164, 77, 218);
    }
`

export const MenuHighLight = styled.a `
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    color: rgb(21, 22, 27);
    background-color: rgb(229, 225, 69);
    padding: 0.5rem 0.75rem;
    margin-right: .75rem;
    text-decoration: none;
    border-radius: 5px;

    &:hover {
        color: #FFFFFF;
        cursor: pointer;
    }
`

export const MenuRight = styled.a `
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: #FFFFFF;
    margin-right: .75rem;
    text-decoration: none;
    transition: color 0.2s ease-out 0s;

    &:hover {
        color: #E4105D;
        cursor: pointer;
    }
`

export const UserPicture = styled.img `
    width: 3rem;
    height: 3rem;
    border: 2px solid #FFFFFF;
    border-radius: 1.375rem;
    margin-right: 1rem;
`

export const Input = styled.input `
    height: 2rem;
    background: transparent;
    flex: 1;
    border: 0;
    color: #FFFFFF;

    &::placeholder {
        font-size: 1rem;
        text-transform: uppercase;
        color: #FFFFFF;
    }
`
export const IconContainer = styled.div `
    margin-right: .7rem;
    color: #FFFFFF;
`

export const Logout = styled.a `
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.5rem
    color: #FFFFFF;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        color: rgb(164, 77, 218);
    }
`