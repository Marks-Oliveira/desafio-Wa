import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { useUserIssues } from '../../providers/userIssues';
import api from '../../services/api'
import QuestionCard from '../../components/QuestionCard';
import begin from '../../images/letsgo.gif';
import finished from '../../images/finished.gif';

import * as S from './styles';
import Button from '@material-ui/core/Button';

const screenStates = {
    QUIZ: 'QUIZ',
    UPLOADQUESTIONS: 'UPLOADQUESTIONS',
    RESULT: 'RESULT'
};

const QuestionsPage = () => {
    const [questions, setQuestions] = useState("");
    const [screenState, setScreenState] = useState(screenStates.UPLOADQUESTIONS);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [disableNextButton, setDisableNextButton] = useState("false");
    const [disableStartButton, setDisableStartButton] = useState("true");
    const [disableCancelButton, setDisableCancelButton] = useState("true");
    const [disableReportButton, setDisableReportButton] = useState("false");
    const history = useHistory();
    const { 
        numberOfQuestions, setNumberOfQuestions,
        chosenAlternative, setChosenAlternative,
        numberSuccesses, setNumberSuccesses,
        numberErrors, setNumberErrors,
        responses, setResponses
    } = useUserIssues();

    const handleQuestions = async () => {
        try {
          const response = await api.get(`api.php?amount=${numberOfQuestions}`);
      
          setQuestions(response.data.results);
          setScreenState(screenStates.QUIZ);
          setDisableNextButton("true");
          setDisableStartButton("false");
        } catch (error) {
          alert("Falha ao buscar as questões :(");
        }
    };

    const goToNextQuestion = () => {
        const nextQuestion = questionIndex + 1;

        if (nextQuestion < questions.length && chosenAlternative !== "") {
            setQuestionIndex(questionIndex + 1);
            setChosenAlternative("");

            if (questions[questionIndex].correct_answer === chosenAlternative) {
                setNumberSuccesses(numberSuccesses + 1);
            } else {
                setNumberErrors(numberErrors + 1);
            };

            const response = {
                question: questions[questionIndex].question,
                correctAnswer: questions[questionIndex].correct_answer,
                chosenAnswer: chosenAlternative
            };

            setResponses([response, ...responses]);

        } else if (nextQuestion < questions.length && chosenAlternative === "") {
            alert("Para prosseguir escolha uma alternativa.")
        };

        if (nextQuestion === questions.length && chosenAlternative === "") {
            alert("Para prosseguir escolha uma alternativa.")
        } else if (nextQuestion === questions.length && chosenAlternative !== "") {
            
            if (questions[questionIndex].correct_answer === chosenAlternative) {
                setNumberSuccesses(numberSuccesses + 1);
            } else {
                setNumberErrors(numberErrors + 1);
            };

            const response = {
                question: questions[questionIndex].question,
                correctAnswer: questions[questionIndex].correct_answer,
                chosenAnswer: chosenAlternative
            };

            setResponses([response, ...responses]);

            setScreenState(screenStates.RESULT);
            setChosenAlternative("");
            setDisableNextButton("false");
            setDisableCancelButton("false");
            setDisableReportButton("true");
        };
    };

    const goToHomePage = () => {
        history.replace(`/`);
        setNumberOfQuestions("");
    };

    const goToReportPage = () => {
        const newResponses = {
            numberSuccesses: numberSuccesses,
            numberErrors: numberErrors,
            responses: responses
        };
        window.localStorage.setItem('userResponses', JSON.stringify(newResponses));
        
        setNumberSuccesses(0);
        setNumberErrors(0);
        setResponses([]);
        history.replace(`/report`);
    };

    return (
        <S.Wrapper>
            <S.Container>
                <S.Buttons>
                    <S.StartButton visibleStartButton={disableStartButton}>
                        <Button 
                            onClick={handleQuestions}
                            variant="contained" 
                            color="primary"
                            size="large"
                            style={{
                                width: "6.5rem",
                            }}
                        >
                            Start
                        </Button>
                    </S.StartButton>
                    <S.CancelButton visibleCancelButton={disableCancelButton}>
                        <Button 
                            onClick={goToHomePage}
                            variant="contained" 
                            color="primary"
                            size="large"
                            style={{
                                width: "6.5rem",
                            }}
                        >
                            Cancel
                        </Button>
                    </S.CancelButton>
                </S.Buttons>
                <S.QuestionsCards>
                    {screenState === screenStates.UPLOADQUESTIONS ? <S.Begin src={begin} alt="Begin" /> : null}
                    {screenState === screenStates.QUIZ ? <QuestionCard question={questions[questionIndex]} /> : null}
                    {screenState === screenStates.RESULT ? <S.Finished src={finished} alt="Finished" /> : null}
                </S.QuestionsCards>
                <S.ButtonNext visibleDiv={disableNextButton}>
                    <Button 
                        onClick={goToNextQuestion}
                        variant="contained" 
                        color="primary"
                        size="large"
                        style={{
                            width: "6.5rem",
                        }}
                    >
                        Next
                    </Button>
                </S.ButtonNext>
                <S.ReportButton visibleSection={disableReportButton}>
                    <Button
                        onClick={goToReportPage}
                        variant="contained" 
                        color="primary"
                        size="large"
                        style={{
                            width: "12.5rem",
                        }}
                    >
                        Exibir Resultado
                    </Button>
                </S.ReportButton>
            </S.Container>
        </S.Wrapper>
    );
};

export default QuestionsPage;
