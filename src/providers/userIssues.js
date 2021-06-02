import React, { createContext, useContext, useState } from 'react';

export const UserIssuesContext = createContext({});

export const UserIssuesProvider = (props) => {
    const [numberOfQuestions, setNumberOfQuestions] = useState("");
    const [chosenAlternative, setChosenAlternative] = useState("");
    const [numberSuccesses, setNumberSuccesses] = useState(0);
    const [numberErrors, setNumberErrors] = useState(0);
    const [responses, setResponses] = useState([]);

    return (
        <UserIssuesContext.Provider 
            value={{ 
                numberOfQuestions, setNumberOfQuestions,
                chosenAlternative, setChosenAlternative,
                numberSuccesses, setNumberSuccesses,
                numberErrors, setNumberErrors,
                responses, setResponses
            }}
        >
            {props.children}
        </UserIssuesContext.Provider>
    );
};

export const useUserIssues = () => useContext(UserIssuesContext);
