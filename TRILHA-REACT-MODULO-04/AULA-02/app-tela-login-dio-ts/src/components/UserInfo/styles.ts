import styled from "styled-components";
import { IUserInfoStyled } from "./types";

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;
`

export const UserPicture = styled.img `
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    border: 3px solid #FFFFFF;
    border-radius: 1.375rem;
    margin-right: .75rem;
`

export const NameText = styled.div `
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    font-style: normal;
    line-height: 1.5rem;
    color: #FFFFFF;
`

export const Progress = styled.div<IUserInfoStyled> `
    width: 180px;
    height: 6px;
    background-color: #FFFFFF;
    border-radius: 3px;
    position: relative;

    &::after {
        content: "";
        height: 6px;
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual}) => percentual}%;
        border-radius: 3px;
        background-color: #23D07A;
    }
`