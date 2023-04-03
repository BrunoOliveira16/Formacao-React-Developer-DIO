import styled, { css } from "styled-components";
import { IButtonStyled } from "./types"

export const ButtonContainer = styled.button<IButtonStyled> `
    background: #565656;
    border: 0;
    border-radius: 1.25rem;
    position: relative;

    color: #FFFFFF;
    padding: 4px 12px;
    min-width: 120px;
    width: 100%;

    text-transform: uppercase;
    transition: background-color 0.2s ease-out 0s;

    &:hover {
        background-color: #E4105D;
        cursor: pointer;
    }

    ${({variant}) => variant !== "primary" && css `
    width: 100%;
    min-width: 167px;
    height: 2rem;
    background: #E4105D;
    transition: .3s;
    margin-top: 1rem;

    &:hover {
        
        cursor: pointer;
        box-shadow: #E4105D 0px 0px 48px 0px;
    }

    &::after {
        content: "";
        position: absolute;
        border: 1px solid #E4105D;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 1.25rem;
        }
    `}
`