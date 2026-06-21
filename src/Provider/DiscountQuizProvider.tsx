import { DISCOUNT_QUIZ } from "@/constants/Recipe";
import { createQuizStore } from "@/Provider/createQuizStore";

const {
  QuizProvider: DiscountQuizProvider,
  useQuiz: useDiscountQuiz,
  useQuizAction: useDiscountQuizAction,
} = createQuizStore(DISCOUNT_QUIZ);

export default DiscountQuizProvider;
// eslint-disable-next-line react-refresh/only-export-components
export { useDiscountQuiz, useDiscountQuizAction };
