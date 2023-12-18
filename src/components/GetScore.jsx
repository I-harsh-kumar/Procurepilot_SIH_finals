import React, { useState } from 'react';
import { Card, Button, ProgressBar } from 'react-bootstrap';

const questions = [
  "Familiarize yourself with the tendering process, rules, and regulations specific to the jurisdiction or industry Register and Obtain Necessary Certifications:",
  'Question 2',
  'Question 3',
]; // Add your questions here

const GetScore = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1 && selectedAnswer !== null) {
      // Move to the next question only if an answer is selected
      setCurrentQuestion(currentQuestion + 1);
      // Reset selectedAnswer for the new question
      setSelectedAnswer(null);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      // Reset selectedAnswer when going back to the previous question
      setSelectedAnswer(null);
    }
  };

  const handleAnswer = (answer) => {
    // Update the selected answer
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    // Add your logic for handling the form submission here
    alert('Form submitted!');
  };

  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="container mt-5">
      <ProgressBar now={Math.round(((currentQuestion + 1) / questions.length) * 100)} label={`${Math.round(((currentQuestion + 1) / questions.length) * 100)}%`} className="mb-4" />

      <Card className='text-center'>
        <div className="card-header">Question {currentQuestion + 1}</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">{questions[currentQuestion]}</p>
          <button className="btn btn-success mx-1" onClick={() => handleAnswer('Yes')}>
            Yes
          </button>
          <button className="btn btn-danger mx-1" onClick={() => handleAnswer('No')}>
            No
          </button>
          {selectedAnswer && (
            <div className="mt-2">You selected: <strong>{selectedAnswer}</strong></div>
          )}
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </Card>

      <nav aria-label="Page navigation example" className="mt-5 mb-5">
        <ul className="pagination justify-content-center">
          <li className="page-item mx-1">
            <Button className="page-link" onClick={handlePrev} disabled={currentQuestion === 0}>
              Previous
            </Button>
          </li>
          {isLastQuestion ? (
            <li className="page-item">
              <Button className="page-link" onClick={handleSubmit} disabled={selectedAnswer === null}>
                Submit
              </Button>
            </li>
          ) : (
            <li className="page-item">
              <Button className="page-link" onClick={handleNext} disabled={selectedAnswer === null}>
                Next
              </Button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default GetScore;
