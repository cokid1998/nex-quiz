import QuizCard from "@/components/QuizCard";
import QuizResult from "@/components/QuizResult";
import { MenuRecipeContext } from "@/Provider/MunuRecipeProvider";
import { useContext } from "react";

export default function Menu() {
  const { quiz, currentQuestionIndex } = useContext(MenuRecipeContext)!;

  const isDone = currentQuestionIndex === quiz.length;

  return (
    <div className="min-h-[calc(100vh-var(--top-magic-number))] bg-zinc-50 p-6 rounded-lg">
      <div className="mx-auto max-w-3xl">
        {isDone ? <QuizResult /> : <QuizCard />}
      </div>
    </div>
  );
}
