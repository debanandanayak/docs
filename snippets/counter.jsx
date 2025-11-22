export const Counter = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const questions = [
    {
      number: 15,
      total: 25,
      question:
        "In the operator precedence of LibreOffice Calc, which of these operations is performed last?",
      options: [
        { id: "A", text: "Multiplication (*)", correct: false },
        { id: "B", text: "Division (/)", correct: false },
        { id: "C", text: "Addition (+)", correct: true },
        { id: "D", text: "Exponentiation (^)", correct: false },
      ],
      feedback:
        "Addition and subtraction have the lowest precedence and are performed after exponentiation, multiplication, and division.",
    },
  ];

  const question = questions[currentQuestion];

  const handleAnswerSelect = (optionId) => {
    setSelectedAnswer(optionId);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    // In a real app, move to next question
  };

  const handlePrevious = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    // In a real app, move to previous question
  };

  return (
    <div>
      <p className="text-md">{question.question}</p>
      <div className="flex flex-col gap-2">
        {question.options.map((option) => (
          <button
            key={option.id}
            className={`btn ${selectedAnswer === option.id ? "btn-primary" : ""} text-start`}
            onClick={() => handleAnswerSelect(option.id)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};
