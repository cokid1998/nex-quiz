const MENU_RECIPE_QUIZ = [
  {
    menu: "넥스정식",
    quiz: "넥스정식의 사이드 메뉴는?",
    answer: "소세지",
    choices: ["소세지", "돈가스", "탕수육", "치킨텐더"],
  },
];

export default function QuizCard() {
  const currentQuiz = MENU_RECIPE_QUIZ[0];

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
      {/* 진행도 */}
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between text-sm">
          <span className="font-medium text-zinc-600">문제 1 / {1}</span>
          <span className="text-zinc-500">100%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
          <div className="h-full w-full rounded-full bg-zinc-900" />
        </div>
      </div>

      {/* 문제 */}
      <h2 className="mt-6 text-3xl font-semibold tracking-tight text-zinc-900">
        넥스정식의 사이드 메뉴는?
      </h2>

      {/* 선택지 */}
      <div className="mt-10 space-y-3">
        {currentQuiz.choices.map((choice, index) => (
          <button
            key={choice}
            className="flex w-full items-center gap-4 rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-left transition-all hover:border-zinc-300 hover:bg-zinc-50 cursor-pointer"
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

        <div className="mt-8 flex justify-end">
          <button className="rounded-xl bg-zinc-900 px-6 py-3 font-medium text-white transition-all hover:bg-zinc-800 active:scale-[0.98] cursor-pointer">
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
