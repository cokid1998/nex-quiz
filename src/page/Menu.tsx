import QuizCard from "@/components/QuizCard";
import QuizResult from "@/components/QuizResult";
import { useQuizStore } from "@/store/RecipeStore";
// import {
//   useMenuRecipe,
//   useMenuRecipeAction,
// } from "@/Provider/MenuRecipeProvider";

export default function Menu() {
  const quiz = useQuizStore((state) => state.menuQuiz);
  const currentQuizIndex = useQuizStore((state) => state.menuCurrentQuizIndex);
  const correctList = useQuizStore((state) => state.menuCorrectList);
  const currentQuiz = useQuizStore((state) => state.menuCurrentQuiz);
  const handleChoiceAnswer = useQuizStore(
    (state) => state.menuHandleChoiceAnswer,
  );
  const handleNextQuiz = useQuizStore((state) => state.menuHandleNextQuiz);
  const handleReset = useQuizStore((state) => state.menuHandleReset);
  // const { quiz, currentQuizIndex, correctList, currentQuiz } = useMenuRecipe();
  // const { handleChoiceAnswer, handleNextQuiz, handleReset } =
  //   useMenuRecipeAction();

  const isDone = currentQuizIndex === quiz.length;

  console.log(currentQuizIndex);
  console.log(currentQuiz);

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
