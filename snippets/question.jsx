import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";

export function SpreadsheetQuiz() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b border-gray-800">
        <button className="p-2 hover:bg-gray-800 rounded-full transition">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-medium">Spreadsheet Quiz</h1>
      </div>

      {/* Content */}
      <div className="p-6 max-w-2xl mx-auto">
        {/* Progress */}
        <div className="text-gray-400 text-sm mb-6">
          {question.number} / {question.total}
        </div>

        {/* Question */}
        <h2 className="text-xl mb-8 leading-relaxed">{question.question}</h2>

        {/* Options */}
        <div className="space-y-4">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            const isCorrect = option.correct;
            const showAsCorrect = showFeedback && isCorrect;

            return (
              <button
                key={option.id}
                onClick={() => handleAnswerSelect(option.id)}
                disabled={showFeedback}
                className={`w-full text-left p-5 rounded-lg transition-all ${
                  showAsCorrect
                    ? "bg-emerald-900/40 border-2 border-emerald-500"
                    : isSelected && showFeedback && !isCorrect
                      ? "bg-red-900/40 border-2 border-red-500"
                      : "bg-gray-800 hover:bg-gray-750 border-2 border-transparent"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 font-medium">
                    {option.id}.
                  </span>
                  <div className="flex-1">
                    <div className="text-gray-200">{option.text}</div>

                    {/* Feedback */}
                    {showAsCorrect && (
                      <div className="mt-3">
                        <div className="flex items-center gap-2 text-emerald-400 font-medium mb-2">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          That's right!
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {question.feedback}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-2xl mx-auto flex gap-3">
          <button
            onClick={handlePrevious}
            className="px-8 py-3 rounded-full text-gray-300 hover:bg-gray-800 transition font-medium"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="flex-1 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-medium"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
