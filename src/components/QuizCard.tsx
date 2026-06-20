import Feedback from "@/components/Feedback";
import { shuffleArray } from "@/utils/random";
import type { RecipeActionContextType, RecipeContextType } from "@/types";
import { Progress } from "@/components/ui/progress";

type Props = RecipeContextType & RecipeActionContextType;

export default function QuizCard({
  quiz,
  currentQuiz,
  currentQuestionIndex,
  correctList,
  handleChoiceAnswer,
  handleNextQuestion,
}: Props) {
  const isChoice = correctList.length === currentQuestionIndex + 1;
  const isCorrect = correctList[currentQuestionIndex];
  const progressPer = ((currentQuestionIndex + 1) / quiz.length) * 100;

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
      {/* 진행도 */}

      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between text-sm">
          <span className="font-medium text-zinc-600">
            문제 {currentQuestionIndex + 1} / {quiz.length}
          </span>
          <span className="text-zinc-500">100%</span>
        </div>

        <Progress className="h-2" value={progressPer} />
      </div>

      {/* 문제 */}
      <h2 className="mt-6 text-3xl font-semibold tracking-tight text-zinc-900">
        {currentQuiz.question}
      </h2>

      {/* 선택지 */}
      <div className="mt-10 space-y-3">
        {shuffleArray(currentQuiz.choices).map((choice, index) => (
          <button
            key={choice}
            className="flex w-full items-center gap-4 rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-left transition-all hover:border-zinc-300 hover:bg-zinc-50 cursor-pointer disabled:cursor-not-allowed disabled:bg-zinc-50 disabled:text-zinc-400 disabled:border-zinc-100"
            onClick={() => handleChoiceAnswer(choice)}
            disabled={isChoice}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-sm font-semibold text-zinc-600">
              {index + 1}
            </div>

            <span className="font-medium text-zinc-800">{choice}</span>
          </button>
        ))}

        <div className="mt-8 flex justify-end">
          <button
            disabled={!isChoice}
            onClick={handleNextQuestion}
            className="rounded-xl bg-zinc-900 px-6 py-3 font-medium text-white transition-all hover:bg-zinc-800 active:scale-[0.98] cursor-pointer disabled:bg-zinc-300 disabled:text-zinc-500 disabled:cursor-not-allowed disabled:hover:bg-zinc-300 disabled:active:scale-100"
          >
            다음
          </button>
        </div>
      </div>

      {isChoice && <Feedback currentQuiz={currentQuiz} isCorrect={isCorrect} />}
    </div>
  );
}
