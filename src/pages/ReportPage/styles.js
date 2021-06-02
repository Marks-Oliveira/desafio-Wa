import styled from 'styled-components';

export const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HomeButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding-right: 1rem;
`

export const Container = styled.section`
    width: 70%;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
    padding: 1rem 0;
    margin: 4rem 0;
`

export const SuccessesAndErrors = styled.article`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    font-family: 'Balsamiq Sans', cursive;
    font-size: 1.8rem;
`

export const Responses = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    font-family: 'Balsamiq Sans', cursive;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
        padding: 0 1rem;

        p {
            margin: 0;
            font-size: 1.1rem;
            padding-bottom: 0.8rem;
        }

        span {
            padding-bottom: 0.3rem;
        }

        hr  {
            width: 100%;
            border-color: #8f8377;
        }
    }
`
