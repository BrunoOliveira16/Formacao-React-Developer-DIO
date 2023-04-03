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
    max-width: 300px;
`

export const Column = styled.div `
    width: 50%;
    display: flex;
    justify-content: center;
`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.25rem;
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

export const TitleLogin = styled.p `
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    font-style: normal;
    line-height: 2.5rem;
    margin-bottom: 1.25rem;
`

export const SubtitleLogin = styled.p `
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.5rem;
    margin-bottom: 2.2rem;
`

export const EsqueciText = styled.p `
    font-family: 'Open Sans', sans-serif;
    font-size: .8rem;
    font-weight: 700;
    font-style: normal;
    line-height: 1.5rem;

    color: #E5E044;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

export const CriarText = styled.p `
    font-family: 'Open Sans', sans-serif;
    font-size: .8rem;
    font-weight: 700;
    font-style: normal;
    line-height: 1.5rem;

    color: #E23DD7;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`