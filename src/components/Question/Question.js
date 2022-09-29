import React from 'react';
import './Question.css';

const Question = ({ questionAnswer }) => {
  const { questionNo, question, answer } = questionAnswer;
  return (
    <div className="question-container">
      <h2>Question No: {questionNo}</h2>
      <h3>Question: {question}</h3>
      <p>
        {' '}
        {answer.includes('*')
          ? answer.split(' *').map(e => <li key={e}>{e}</li>)
          : answer}
      </p>
    </div>
  );
};

export default Question;
