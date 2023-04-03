import styled from 'styled-components';

export const CardContainer = styled.div `
    width: 100%;
    margin-bottom: 1.5rem;
    position: relative;
    background-color: #3D4651;
`

export const ImageBackground = styled.img `
    width: 100%;
    height: 180px;
`

export const Content = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: .75rem;
`

export const UserInfo = styled.div `
    display: flex;
    flex-direction: row;
    margin-bottom: .75rem;

    div {
        margin-left: .75rem;
    }

    h4 {
        font-family: 'Open Sans', sans-serif;
        font-size: 1.2rem;
        font-weight: 700;
        font-style: normal;
        line-height: 1.5rem
        color: #FFFFFF;
    }

    p {
        font-family: 'Open Sans', sans-serif;
        font-size: .8rem;
        font-weight: 400;
        font-style: normal;
        line-height: 1rem
        color: #FFFFFF;
    }
`

export const UserPicture = styled.img `
    width: 2rem;
    height: 2rem;
    border: 3px solid #FFFFFF;
    border-radius: 1.375rem;
`

export const PostInfo = styled.div `
    margin-bottom: .75rem;

    h4 {
        font-family: 'Open Sans', sans-serif;
        font-size: 1.2rem;
        font-weight: 700;
        font-style: normal;
        line-height: 1.5rem
        color: #FFFFFF;
    }

    p {
        font-family: 'Open Sans', sans-serif;
        font-size: .8rem;
        font-weight: 400;
        font-style: normal;
        line-height: 1rem
    }
`

export const HasInfo = styled.div `
    margin-top: .75rem;

    h4 {
        font-family: 'Open Sans', sans-serif;
        font-size: 1.2rem;
        font-weight: 700;
        font-style: normal;
        line-height: 1.5rem
        color: #FFFFFF;
    }

    p {
        font-family: 'Open Sans', sans-serif;
        font-size: .8rem;
        font-weight: 400;
        font-style: normal;
        line-height: 1rem
    }
`