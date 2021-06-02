import styled from 'styled-components';

export const Wrapper = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.section`
    position: relative;
    width: 50%;
    height: 68%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
`

export const Buttons = styled.article`
    width: 50%;
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
`

export const StartButton = styled.div`
    pointer-events: ${props => props.visibleStartButton === "false" ? 'none' : 'visible'};
    opacity: ${props => props.visibleStartButton === "false" ? '0.4' : '1'};
`

export const CancelButton = styled.div`
    pointer-events: ${props => props.visibleCancelButton === "false" ? 'none' : 'visible'};
    opacity: ${props => props.visibleCancelButton === "false" ? '0.4' : '1'};
`

export const QuestionsCards = styled.article`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Begin = styled.img`
    width: 80%;
    height: 85%;
    border-radius: 4px;
`

export const Finished = styled.img`
    width: 400px;
    height: 280px;
    border-radius: 4px;
`

export const ButtonNext = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1rem;
    pointer-events: ${props => props.visibleDiv === "false" ? 'none' : 'visible'};
    opacity: ${props => props.visibleDiv === "false" ? '0' : '1'};
`

export const ReportButton = styled.section`
    position: absolute;
    bottom: 0;
    padding: 1rem;
    pointer-events: ${props => props.visibleSection === "false" ? 'none' : 'visible'};
    opacity: ${props => props.visibleSection === "false" ? '0' : '1'};
`
