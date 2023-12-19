import React, { useState } from 'react';
import { Card, Button, ProgressBar } from 'react-bootstrap';

const questions = [
  "Register with relevant tendering authorities or platforms.Obtain any necessary certifications, licenses, or registrations required to qualify for tenders.",
  'Ensure financial stability and have the ability to demonstrate financial capacity.Prepare financial statements and documents as required by the tender.',
  'Ensure compliance with all legal requirements and regulations.Verify that your business adheres to ethical standards and anti-corruption policies.',
  "Check for any pre-qualification criteria specified in the tender document.Ensure that your organization meets the eligibility requirements",
  "Prepare all necessary documentation, including a well-structured business profile, proof of experience, and any other documents required by the tender.",
  "Thoroughly understand the scope of work outlined in the tender document.Evaluate whether your organization has the capacity to meet the requirements",
  "Assemble a competent bid team with expertise in relevant areas.Allocate the necessary resources to prepare a comprehensive bid.",
  "Identify and assess potential risks associated with the tender.Develop strategies to mitigate risks and uncertainties.",
  "Ensure the bid is well-written, clear, and addresses all the requirements outlined in the tender document.Proofread the document for accuracy and completeness",
  "Prepare a realistic and competitive pricing strategy.Clearly outline the pricing structure and any additional costs."
]; // Add your questions here
const heading=[
  "Register and Obtain Necessary Certifications",
  "Financial Stability",
  "Legal Compliance",
  "Pre-Qualification Requirements",
  "Document Preparation",
  "Understand Scope of Work",
  "Bid Team and Resources",
  "Risk Assessment",
  "Quality Assurance",
  "Budgeting and Pricing",
]

const GetScore = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [title, setTitle] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userResponses, setUserResponses] = useState(Array(10).fill(null));

  const handleNext = () => {
    if (currentQuestion < questions.length - 1 && selectedAnswer !== null) {
      // Move to the next question only if an answer is selected 
      setCurrentQuestion(currentQuestion + 1);
      setTitle(currentQuestion + 1);
      // Reset selectedAnswer for the new question
      setSelectedAnswer(null);
    }
  };
  const calculateScore = () => {
    const score = userResponses.reduce((total, response) => total + response, 0);
    return score;
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      
      setTitle(currentQuestion - 1);
      // Reset selectedAnswer when going back to the previous question
      setSelectedAnswer(null);
    }
  };

  const handleAnswer = (answer) => {
    // Update the selected answer
    const updatedResponses = [...userResponses];
    console.log("answer:",answer);
    // if(answer == '')
      updatedResponses[currentQuestion] = answer == 'Yes' ? 1 : 0;
      setUserResponses(updatedResponses);
      console.log("responses:",updatedResponses);
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    // Add your logic for handling the form submission here
    const x=calculateScore();
    console.log("score:",x/10*100,"%");
    alert('Form submitted! your score is:',x);
  };

  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="container mt-5">
      <ProgressBar now={Math.round(((currentQuestion + 1) / questions.length) * 100)} label={`${Math.round(((currentQuestion + 1) / questions.length) * 100)}%`} className="mb-4" />

      <Card className='text-center'>
        <div className="card-header">Question {currentQuestion + 1}</div>
        <div className="card-body">
          <h5 className="card-title">{heading[currentQuestion]}</h5>
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
