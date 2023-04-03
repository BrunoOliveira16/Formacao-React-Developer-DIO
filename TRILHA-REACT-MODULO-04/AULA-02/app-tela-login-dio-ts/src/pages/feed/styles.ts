import styled from 'styled-components';
import { IFeedStyled } from './types';

export const Container = styled.main `
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    margin-top: 4rem;

    display: flex;
    flex-drirection: row;
    justify-content: space-between;
    gap: 5rem;
`

export const Title = styled.h2 `
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    font-style: normal;
    line-height: 2.5rem;
    margin-bottom: 1.25rem;

    color: #FFFFFF;
`

export const TitleHighLight = styled.h3 `
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    font-style: normal;
    line-height: 2rem;
    margin-bottom: 1.5rem;

    color: #FFFFFF;
`

export const Column = styled.div<IFeedStyled> `
    flex: ${({flex}) => flex};
    
    &:nth-child(2) {
        padding-left: 2rem;
    }
`