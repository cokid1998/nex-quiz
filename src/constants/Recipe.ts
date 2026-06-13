import { type Quiz } from "@/Provider/MunuRecipeProvider";

export const MENU_RECIPE_QUIZ: Quiz[] = [
  {
    menu: "넥스정식",
    question: "넥스정식의 사이드 메뉴는?",
    choices: ["소세지", "돈가스", "탕수육", "치킨텐더"],
    answer: "소세지",
  },
  {
    menu: "돈까스 정식",
    question: "돈까스 정식의 조합은?",
    choices: [
      "라면 + 밥 + 치즈 돈까스 + 탄산",
      "김치볶음밥 + 돈까스 + 탄산",
      "라면 + 밥 + 돈까스 + 탄산",
      "김치볶음밥 + 치즈 돈까스 + 탄산",
    ],
    answer: "라면 + 밥 + 돈까스 + 탄산",
  },
  {
    menu: "치즈 돈까스 정식",
    question: "치즈 돈까스 정식의 조합은?",
    choices: [
      "라면 + 밥 + 치즈 돈까스 + 탄산",
      "김치볶음밥 + 돈까스 + 탄산",
      "라면 + 밥 + 돈까스 + 탄산",
      "김치볶음밥 + 치즈 돈까스 + 탄산",
    ],
    answer: "라면 + 밥 + 치즈 돈까스 + 탄산",
  },
];
