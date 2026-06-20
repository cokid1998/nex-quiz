import QuizResult from "@/components/QuizResult";
import QuizCard from "@/components/QuizCard";
import { useQuizStore } from "@/store/RecipeStore";
// import {
//   useCafeRecipe,
//   useCafeRecipeAction,
// } from "@/Provider/CafeRecipeProvider";

export default function Cafe() {
  const quiz = useQuizStore((state) => state.cafeQuiz);
  const currentQuizIndex = useQuizStore((state) => state.cafeCurrentQuizIndex);
  const correctList = useQuizStore((state) => state.cafeCorrectList);
  const currentQuiz = useQuizStore((state) => state.cafeCurrentQuiz);
  const handleChoiceAnswer = useQuizStore(
    (state) => state.cafeHandleChoiceAnswer,
  );
  const handleNextQuiz = useQuizStore((state) => state.cafeHandleNextQuiz);
  const handleReset = useQuizStore((state) => state.cafeHandleReset);
  // const { quiz, currentQuiz, currentQuizIndex, correctList } = useCafeRecipe();
  // const { handleChoiceAnswer, handleNextQuiz, handleReset } =
  //   useCafeRecipeAction();

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
