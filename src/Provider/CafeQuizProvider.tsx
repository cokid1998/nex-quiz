import { CAFE_RECIPE_QUiZ } from "@/constants/Recipe";
import { createQuizStore } from "@/Provider/createQuizStore";

const {
  QuizProvider: CafeQuizProvider,
  useQuiz: useCafeQuiz,
  useQuizAction: useCafeAction,
} = createQuizStore(CAFE_RECIPE_QUiZ);

export default CafeQuizProvider;
// eslint-disable-next-line react-refresh/only-export-components
export { useCafeQuiz, useCafeAction };
