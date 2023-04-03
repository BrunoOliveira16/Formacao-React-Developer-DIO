import styled from 'styled-components';

export const Container = styled.main `
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 7.5rem;

    display: flex;
    flex-drirection: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div `
    max-width: 374px;
    display: flex;
    flex-direction: column;

    & Button {
        width: 167px;
        margin-top: 2rem;
    }
`

export const Title = styled.h2 `
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    font-style: normal;
    line-height: 2.5rem
    width: 20rem;
    margin-bottom: 1.25rem;

    color: #FFFFFF;
`

export const TitleHighLight = styled.span `
    color: #E4105D;
`

export const TextContent = styled.p `
font-family: 'Open Sans', sans-serif;
font-size: 1rem;
font-weight: 400;
font-style: normal;
line-height: 1.5rem
width: 26.25rem;
margin-bottom: 1.25rem;

color: #FFFFFF;
`