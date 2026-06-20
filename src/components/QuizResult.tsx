import type { RecipeContextType } from "@/types";

type Props = Pick<RecipeContextType, "correctList" | "quiz">;

export default function QuizResult({ correctList, quiz }: Props) {
  const correctCount = correctList.filter((result) => result).length;
  const accuracy = Math.round((correctCount / quiz.length) * 100);

  // 내가 있는 데이터 [ture, false, true] << 맞은 문제가 순서대로 bool값으로 있는 배열
  // quiz데이터
  const falseIndexes = correctList.flatMap((val, i) => (val ? [] : [i]));
  const wrongAnswers = falseIndexes.map((i) => quiz[i]);

  return (
    <div className="mx-auto max-w-4xl p-6">
      {/* 요약 */}
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-zinc-900">퀴즈 완료 🎉</h1>

        <div className="mt-8 flex gap-8">
          <div>
            <p className="text-sm text-zinc-500">정답 수</p>

            <p className="text-4xl font-bold text-zinc-900">
              {correctCount}
              <span className="text-zinc-400">/{quiz.length}</span>
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">정답률</p>

            <p className="text-4xl font-bold text-zinc-900">{accuracy}%</p>
          </div>
        </div>

        <button className="mt-8 rounded-xl bg-zinc-900 px-6 py-3 font-medium text-white hover:bg-zinc-800">
          다시 풀기
        </button>
      </div>

      {/* 오답노트 */}
      {wrongAnswers.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900">오답노트</h2>

          <div className="space-y-4">
            {wrongAnswers.map((result) => (
              <div
                key={result.menu}
                className="
                  rounded-2xl
                  border border-red-200
                  bg-red-50
                  p-5
                "
              >
                <h3 className="font-semibold text-zinc-900">{result.menu}</h3>

                <div className="mt-3 space-y-1 text-sm">
                  <p>정답: {result.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {wrongAnswers.length === 0 && (
        <div className="mt-8 rounded-3xl border border-green-200 bg-green-50 p-8 text-center">
          <h2 className="text-xl font-semibold text-green-700">
            💯 만점입니다!
          </h2>

          <p className="mt-2 text-zinc-600">
            모든 메뉴 레시피를 정확하게 알고 있습니다.
          </p>
        </div>
      )}
    </div>
  );
}
