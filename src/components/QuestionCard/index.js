import React, { useEffect, useState } from 'react';

import { useUserIssues } from '../../providers/userIssues';

import * as S from './styles';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const QuestionCard = ({ question }) => {
    const [correctAnswerPosition, setCorrectAnswerPosition] = useState(0);
    const { chosenAlternative, setChosenAlternative } = useUserIssues();

    useEffect(() => {
        if (question.incorrect_answers.length > 1) {
            setCorrectAnswerPosition(Math.floor(Math.random() * 4));
        } else {
            setCorrectAnswerPosition(Math.floor(Math.random() * 2));
        };
    }, []);

    const newQuestion = [];
    newQuestion.push(question);
        
    let options = newQuestion.flatMap((item) => 
        item.incorrect_answers
    );
    options.splice(correctAnswerPosition, 0, question.correct_answer);

    return (
        <S.Wrapper>
            <S.Question>
                <p>{question.question.replace(/&quot;|&#039;/g, "'")}</p>
            </S.Question>
            <S.CategoryAndDificulty>
                <div> <span>{question.category}</span> </div>
                <div> <p>Difficulty:</p><span>{question.difficulty}</span> </div>
            </S.CategoryAndDificulty>
            <S.Alternatives>
                <FormControl component="fieldset">
                    <RadioGroup value={chosenAlternative} onChange={e => setChosenAlternative(e.target.value)}>
                        {options.map((item, index) => 
                            <FormControlLabel 
                                key={index} 
                                value={item} 
                                control={<Radio color="primary" />} 
                                label={item} 
                            />
                        )}
                    </RadioGroup>
                </FormControl>
            </S.Alternatives>
        </S.Wrapper>
    );
};

export default QuestionCard;
