const MENU_RECIPE_QUIZ = [
  {
    menu: "넥스정식",
    quiz: "넥스정식의 사이드 메뉴는?",
    answer: "소세지",
    choices: ["소세지", "돈가스", "탕수육", "치킨텐더"],
  },
];

export default function Menu() {
  const currentQuiz = MENU_RECIPE_QUIZ[0];

  return (
    <div className="min-h-[calc(100vh-var(--top-magic-number))] bg-zinc-50 p-6 rounded-lg">
      <div className="mx-auto max-w-3xl">
        {/* 헤더 */}

        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 mb-8">
          메뉴 레시피 퀴즈
        </h1>

        {/* 퀴즈 카드 */}
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          {/* 진행도 */}
          <div className="mb-8">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="font-medium text-zinc-600">
                문제 1 / {MENU_RECIPE_QUIZ.length}
              </span>
              <span className="text-zinc-500">100%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
              <div className="h-full w-full rounded-full bg-zinc-900" />
            </div>
          </div>

          {/* 문제 */}
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-zinc-900">
            {currentQuiz.quiz}
          </h2>

          {/* 선택지 */}
          <div className="mt-10 space-y-3">
            {currentQuiz.choices.map((choice, index) => (
              <button
                key={choice}
                className="
                  flex w-full items-center gap-4
                  rounded-2xl
                  border border-zinc-200
                  bg-white
                  px-5 py-4
                  text-left
                  transition-all
                  hover:border-zinc-300
                  hover:bg-zinc-50
                  cursor-pointer
                "
              >
                <div
                  className="
                    flex h-8 w-8 items-center justify-center
                    rounded-full
                    bg-zinc-100
                    text-sm font-semibold
                    text-zinc-600
                  "
                >
                  {index + 1}
                </div>

                <span className="font-medium text-zinc-800">{choice}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CorrectFeedBack() {
  return (
    <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 p-5">
      <p className="font-semibold text-green-700">정답입니다 🎉</p>
      <p className="mt-2 text-zinc-700">
        넥스정식의 사이드 메뉴는 소세지입니다.
      </p>
    </div>
  );
}

function WrongFeedback() {
  return (
    <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-5">
      <p className="font-semibold text-red-700">오답입니다</p>
      <p className="mt-2 text-zinc-700">정답은 소세지입니다.</p>
    </div>
  );
}
