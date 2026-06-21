import QuizCard from "@/components/QuizCard";
import QuizResult from "@/components/QuizResult";
import { useMenuQuiz, useMenuAction } from "@/Provider/MenuQuizProvider";

export default function Menu() {
  const { quiz, currentQuizIndex, correctList, currentQuiz } = useMenuQuiz();
  const { handleChoiceAnswer, handleNextQuiz, handleReset } = useMenuAction();

  const isDone = currentQuizIndex === quiz.length;

  return (
    <div className="min-h-[calc(100vh-var(--top-magic-number))] bg-zinc-50 p-6 rounded-lg">
      <div className="mx-auto max-w-3xl">
        {isDone ? (
          <QuizResult
            quiz={quiz}
            correctList={correctList}
            handleReset={handleReset}
          />
        ) : (
          <QuizCard
            quiz={quiz}
            currentQuizIndex={currentQuizIndex}
            correctList={correctList}
            currentQuiz={currentQuiz}
            handleChoiceAnswer={handleChoiceAnswer}
            handleNextQuiz={handleNextQuiz}
          />
        )}
      </div>
    </div>
  );
}
