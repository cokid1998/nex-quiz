import QuizResult from "@/components/QuizResult";
import QuizCard from "@/components/QuizCard";
import {
  useCafeRecipe,
  useCafeRecipeAction,
} from "@/Provider/CafeRecipeProvider";

export default function Cafe() {
  const { quiz, currentQuiz, currentQuizIndex, correctList } = useCafeRecipe();
  const { handleChoiceAnswer, handleNextQuestion, handleReset } =
    useCafeRecipeAction();

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
            handleNextQuestion={handleNextQuestion}
          />
        )}
      </div>
    </div>
  );
}
