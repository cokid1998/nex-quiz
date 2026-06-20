import QuizCard from "@/components/QuizCard";
import QuizResult from "@/components/QuizResult";
import {
  useMenuRecipe,
  useMenuRecipeAction,
} from "@/Provider/MunuRecipeProvider";

export default function Menu() {
  const { quiz, currentQuestionIndex, correctList, currentQuiz } =
    useMenuRecipe();
  const { handleChoiceAnswer, handleNextQuestion } = useMenuRecipeAction();

  const isDone = currentQuestionIndex === quiz.length;

  return (
    <div className="min-h-[calc(100vh-var(--top-magic-number))] bg-zinc-50 p-6 rounded-lg">
      <div className="mx-auto max-w-3xl">
        {isDone ? (
          <QuizResult quiz={quiz} correctList={correctList} />
        ) : (
          <QuizCard
            quiz={quiz}
            currentQuestionIndex={currentQuestionIndex}
            correctList={correctList}
            currentQuiz={currentQuiz}
            handleChoiceAnswer={handleChoiceAnswer}
            handleNextQuestion={handleNextQuestion}
          />
        )}
      </div>
    </div>
  );
}
