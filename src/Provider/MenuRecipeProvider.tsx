import { createContext, useContext, useState, type ReactNode } from "react";
import { MENU_RECIPE_QUIZ } from "@/constants/Recipe";
import type { RecipeContextType, RecipeActionContextType } from "@/types";

const MenuRecipeContext = createContext<RecipeContextType | null>(null);
const MenuRecipeActionContext = createContext<RecipeActionContextType | null>(
  null,
);

export default function MenuRecipeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctList, setCorrectList] = useState<boolean[]>([]);

  const currentQuiz = MENU_RECIPE_QUIZ[currentQuestionIndex];

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleChoiceAnswer = (selectedAnswer: string) => {
    const isCorrect = selectedAnswer === currentQuiz.answer;
    // correctList채우기
    setCorrectList((prev) => [...prev, isCorrect]);
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setCorrectList([]);
  };

  return (
    <MenuRecipeContext.Provider
      value={{
        quiz: MENU_RECIPE_QUIZ, // 퀴즈 데이터
        currentQuiz, // 현재 퀴즈
        currentQuestionIndex, // 현재 퀴즈 문제 번호
        correctList, // 정답현황 리스트
      }}
    >
      <MenuRecipeActionContext.Provider
        value={{
          handleNextQuestion, // 다음 문제 핸들런
          handleChoiceAnswer,
          handleReset,
        }}
      >
        {children}
      </MenuRecipeActionContext.Provider>
    </MenuRecipeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useMenuRecipe = () => {
  const context = useContext(MenuRecipeContext);

  if (!context) {
    throw new Error(
      "useMenuRecipe는 MenuRecipeProvider안에서만 사용할 수 있습니다.",
    );
  }

  return context;
};
// eslint-disable-next-line react-refresh/only-export-components
export const useMenuRecipeAction = () => {
  const context = useContext(MenuRecipeActionContext);

  if (!context) {
    throw new Error(
      "useMenuRecipeAction는 MenuRecipeActionProvider안에서만 사용할 수 있습니다.",
    );
  }

  return context;
};
