import React, { useEffect, useState }  from 'react';
import { useHistory } from 'react-router';

import { useUserIssues } from '../../providers/userIssues';

import * as S from './styles';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';

const HomePage = () => {
    const { numberOfQuestions, setNumberOfQuestions } = useUserIssues();
    const [disableReportButton, setDisableReportButton] = useState("false");
    const history = useHistory();

    useEffect(() => {
        if (window.localStorage.getItem('userResponses') !== null) {
            setDisableReportButton("true");
        };
    }, []);

    const goToQuestionsPage = () => {
        history.replace("/questions");
    };

    const goToReportPage = () => {
        history.push("/report");
    };

    return (
        <S.Wrapper>
            <S.ReportButton visibleReportButton={disableReportButton}>
                <Button 
                    variant="contained" 
                    color="primary"
                    type="submit"
                    onClick={goToReportPage}
                    style={{
                        marginTop: "1.4rem",
                    }}
                >
                    Rever Último Jogo
                </Button>
            </S.ReportButton>
            <S.Container>
                <p>Bem-vindo(a) ao jogo</p>
                <h1>Perguntas e Respostas!</h1>
                <span>Informe o número de perguntas</span>
                <form onSubmit={goToQuestionsPage}>
                    <S.Input>
                        <FormControl variant="outlined">
                            <OutlinedInput
                                variant="outlined"
                                value={numberOfQuestions}
                                onChange={e => setNumberOfQuestions(e.target.value)}
                                required
                                autoFocus
                                type="number"
                                inputProps={{
                                    max: 99,
                                    min: 1
                                }}
                                style={{
                                    width: "4.4rem",
                                    background: "#fff",
                                    borderRadius: "4px"
                                }}
                            />
                        </FormControl>
                        <Button 
                            variant="contained" 
                            color="primary"
                            type="submit"
                            style={{
                                marginTop: "1.4rem",
                            }}
                        >
                            Iniciar
                        </Button>
                    </S.Input>
                </form>
            </S.Container>
        </S.Wrapper>
    );
};

export default HomePage;
