import React, { useEffect, useState } from 'react';
import Question from '../Question/Question';
import './Questions.css';

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch('questions.json')
      .then(response => response.json())
      .then(data => setQuestions(data));
  }, []);

  return (
    <div className="questions-container">
      <h2>Questions Section</h2>
      {questions?.map(question => (
        <Question
          key={question.questionNo}
          questionAnswer={question}
        ></Question>
      ))}
    </div>
  );
};

export default Questions;
