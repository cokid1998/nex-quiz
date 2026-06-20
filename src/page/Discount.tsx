import QuizResult from "@/components/QuizResult";
import QuizCard from "@/components/QuizCard";
import { useQuizStore } from "@/store/RecipeStore";
// import { useDiscount, useDiscountAction } from "@/Provider/DiscountProvider";

export default function Discount() {
  const quiz = useQuizStore((state) => state.discountQuiz);
  const currentQuizIndex = useQuizStore(
    (state) => state.discountCurrentQuizIndex,
  );
  const correctList = useQuizStore((state) => state.discountCorrectList);
  const currentQuiz = useQuizStore((state) => state.discountCurrentQuiz);
  const handleChoiceAnswer = useQuizStore(
    (state) => state.discountHandleChoiceAnswer,
  );
  const handleNextQuiz = useQuizStore((state) => state.discountHandleNextQuiz);
  const handleReset = useQuizStore((state) => state.discountHandleReset);
  // const { quiz, currentQuizIndex, correctList, currentQuiz } = useDiscount();
  // const { handleChoiceAnswer, handleNextQuiz, handleReset } =
  //   useDiscountAction();

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
