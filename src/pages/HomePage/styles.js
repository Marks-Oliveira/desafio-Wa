import styled from 'styled-components';

export const Wrapper = styled.main`
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ReportButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding-right: 1rem;
    pointer-events: ${props => props.visibleReportButton === "false" ? 'none' : 'visible'};
    opacity: ${props => props.visibleReportButton === "false" ? '0' : '1'};
`

export const Container = styled.section`
    width: 50%;
    height: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    color: #ffea24;
    font-family: 'Balsamiq Sans', cursive;

    p {
        margin: 0;
        font-size: 1.5rem;
    }

    h1 {
        font-size: 3rem;
    }

    span {
        font-size: 1.1rem;
        padding-bottom: 0.4rem;
    }
`

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
