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
    <div className="flex items-center justify-center">
      <div className="flex items-center rounded-xl overflow-hidden border border-zinc-950/20 dark:border-white/20">
        <button
          onClick={decrement}
          className="flex items-center justify-center h-8 w-8 text-zinc-950/80 dark:text-white/80 border-r border-zinc-950/20 dark:border-white/20"
          aria-label="Decrease"
        >
          -
        </button>

        <div className="flex text-sm items-center justify-center h-8 px-6 text-zinc-950/80 dark:text-white/80 font-medium min-w-[4rem] text-center">
          {count}
        </div>

        <button
          onClick={increment}
          className="flex items-center justify-center h-8 w-8 text-zinc-950/80 dark:text-white/80 border-l border-zinc-950/20 dark:border-white/20"
          aria-label="Increase"
        >
          +
        </button>
      </div>
    </div>
  );
};
