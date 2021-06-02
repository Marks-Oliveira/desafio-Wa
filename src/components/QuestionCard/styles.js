import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 30rem;
    height: 18rem;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
`

export const Question = styled.section`
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0946b3;
    color: #fff;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    font-family: 'Balsamiq Sans', cursive;
    padding: 0.6rem;
`

export const CategoryAndDificulty = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0.5rem;
    font-family: 'Balsamiq Sans', cursive;

    div {
        display: flex;

        p {
            margin: 0;
            padding-right: 0.4rem;
        }
    }
`

export const Alternatives = styled.section`
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
`
