import QuizResult from "@/components/QuizResult";
import QuizCard from "@/components/QuizCard";
import { useDiscount, useDiscountAction } from "@/Provider/DiscountProvider";

export default function Discount() {
  const { quiz, currentQuizIndex, correctList, currentQuiz } = useDiscount();
  const { handleChoiceAnswer, handleNextQuiz, handleReset } =
    useDiscountAction();

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
            currentQuiz={currentQuiz}
            currentQuizIndex={currentQuizIndex}
            correctList={correctList}
            handleChoiceAnswer={handleChoiceAnswer}
            handleNextQuiz={handleNextQuiz}
          />
        )}
      </div>
    </div>
  );
}
