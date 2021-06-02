import React from 'react';
import { useHistory } from 'react-router';

import { useUserIssues } from '../../providers/userIssues';

import * as S from './styles';
import Button from '@material-ui/core/Button';

const ReportPage = () => {
    const { setNumberOfQuestions } = useUserIssues();
    const history = useHistory();

    const userStorage = window.localStorage.getItem('userResponses');

    const report = JSON.parse(userStorage);

    const goToHomePage = () => {
        history.push("/");
        setNumberOfQuestions("");
    };

    return (
        <S.Wrapper>
            <S.HomeButton>
                <Button 
                    variant="contained" 
                    color="primary"
                    type="submit"
                    onClick={goToHomePage}
                    style={{
                        marginTop: "1.4rem",
                    }}
                >
                    Home
                </Button>
            </S.HomeButton>
            <S.Container>
                <S.SuccessesAndErrors>
                    <span>Número de acertos: {report.numberSuccesses}</span>
                    <span>Número de erros: {report.numberErrors}</span>
                </S.SuccessesAndErrors>
                <S.Responses>
                    {report.responses.map((item, index) => 
                        <div key={index}>
                            <p><em>Pergunta:</em> {item.question.replace(/&quot;|&#039;/g, "'")}</p>
                            <span><strong>Resposta correta: <em>{item.correctAnswer}</em></strong></span>
                            <span><strong>Resposta escolhida: <em>{item.chosenAnswer}</em></strong></span>
                            <hr />
                        </div>
                    )}
                </S.Responses>
            </S.Container>
        </S.Wrapper>
    );
};

export default ReportPage;
