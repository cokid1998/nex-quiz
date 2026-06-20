import QuizCard from "@/components/QuizCard";
import QuizResult from "@/components/QuizResult";
import {
  useMenuRecipe,
  useMenuRecipeAction,
} from "@/Provider/MenuRecipeProvider";

export default function Menu() {
  const { quiz, currentQuizIndex, correctList, currentQuiz } = useMenuRecipe();
  const { handleChoiceAnswer, handleNextQuiz, handleReset } =
    useMenuRecipeAction();

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
