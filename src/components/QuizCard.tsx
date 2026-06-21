import Feedback from "@/components/Feedback";
import { shuffleArray } from "@/utils/random";
import type { QuizActionContextType, QuizContextType } from "@/types";
import { Progress } from "@/components/ui/progress";
import { useMemo } from "react";

type Props = QuizContextType & Omit<QuizActionContextType, "handleReset">;
/**
 * 버그 해결 정리
 * 선택지를 클릭했을 때 원래 순서의 선택지가 shuffleArray 함수 때문에 다시 섞이는 버그가 있음
 * 즉 처음 보여준 선택지 순서와, 선택지를 클릭한 직후 다시 보여지는 선택지 순서가 다르게 됨
 * 이 문제의 원인은 correctList가 변경되면서 QuizCard가 리렌더링되고 shuffleArray 다시 호출되면서 일어나는 버그임을 파악함
 *
 * 그렇다면 correctList가 바뀔 때 QuizCard가 리렌더링하지 못하게 만들면 되는것이 아닐까?
 * 그렇지 않음 QuizCard의 isChoice와 isCorrect는 correctList에 의존하고 있음
 * isChoice와 isCorrect는 UI에 직결된 값들임
 * 즉 correctList가 변경될 때 QuizCard는 무조건 리렌더링이 돼야함!!
 *
 * 그렇기 때문에 위 방법은 좋은 방법이 아님
 * useMemo를 통해 선택지 순서(shuffleArray의 결과값)를 currentQuiz에만 의존하도록 메모이제이션하는게 맞는 해결방법임
 * correctList는 선택지 순서와 무관한 값이므로 의존성 배열에 포함되면 안 됨
 */

export default function QuizCard({
  quiz,
  currentQuiz,
  currentQuizIndex,
  correctList,
  handleChoiceAnswer,
  handleNextQuiz,
}: Props) {
  const isChoice = correctList.length === currentQuizIndex + 1;
  const isCorrect = correctList[currentQuizIndex];
  const progressPer = ((currentQuizIndex + 1) / quiz.length) * 100;

  const shuffleChoices = useMemo(
    () => shuffleArray(currentQuiz.choices),
    [currentQuiz],
  );

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
      {/* 진행도 */}

      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between text-sm">
          <span className="font-medium text-zinc-600">
            문제 {currentQuizIndex + 1} / {quiz.length}
          </span>
          <span className="text-zinc-500">{Math.floor(progressPer)}%</span>
        </div>

        <Progress className="h-2" value={progressPer} />
      </div>

      {/* 문제 */}
      <h2 className="mt-6 text-3xl font-semibold tracking-tight text-zinc-900">
        {currentQuiz.question}
      </h2>

      {/* 선택지 */}
      <div className="mt-10 space-y-3">
        {shuffleChoices.map((choice, index) => (
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
            onClick={handleNextQuiz}
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
