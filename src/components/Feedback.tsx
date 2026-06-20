import type { RecipeContextType } from "@/types";

function CorrectFeedBack() {
  return (
    <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 p-5">
      <p className="font-semibold text-green-700">정답입니다 🎉</p>
    </div>
  );
}

function WrongFeedback({
  currentQuiz,
}: Pick<RecipeContextType, "currentQuiz">) {
  return (
    <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-5">
      <p className="font-semibold text-red-700">오답입니다</p>
      <p className="mt-2 text-zinc-700">정답은 {currentQuiz.answer}입니다.</p>
    </div>
  );
}

export default function Feedback({
  isCorrect,
  currentQuiz,
}: Pick<RecipeContextType, "currentQuiz"> & { isCorrect: boolean }) {
  if (isCorrect) return <CorrectFeedBack />;

  return <WrongFeedback currentQuiz={currentQuiz} />;
}
