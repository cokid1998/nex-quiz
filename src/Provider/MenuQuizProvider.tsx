import { createQuizStore } from "@/Provider/createQuizStore";
import { MENU_RECIPE_QUIZ } from "@/constants/Recipe";
const {
  QuizProvider: MenuQuizProvider,
  useQuiz: useMenuQuiz,
  useQuizAction: useMenuAction,
} = createQuizStore(MENU_RECIPE_QUIZ);

export default MenuQuizProvider;
// eslint-disable-next-line react-refresh/only-export-components
export { useMenuQuiz, useMenuAction };
