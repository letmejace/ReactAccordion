import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);

  return(
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section className="info">
          {/* 모든 Question component를 map으로 표시하기*/}
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
