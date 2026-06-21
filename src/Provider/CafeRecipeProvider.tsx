import { createContext, type ReactNode, useContext, useState } from "react";
import type { QuizContextType, QuizActionContextType } from "@/types";
import { CAFE_RECIPE_QUiZ } from "@/constants/Recipe";

const CafeRecipeContext = createContext<QuizContextType | null>(null);
const CafeRecipeActionContext = createContext<QuizActionContextType | null>(
  null,
);

export default function CafeRecipeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [correctList, setCorrectList] = useState<boolean[]>([]);

  const currentQuiz = CAFE_RECIPE_QUiZ[currentQuizIndex];

  const handleNextQuestion = () => {
    setCurrentQuizIndex((prev) => prev + 1);
  };

  const handleChoiceAnswer = (selectedAnswer: string) => {
    const isCorrect = selectedAnswer === currentQuiz.answer;
    // correctList채우기
    setCorrectList((prev) => [...prev, isCorrect]);
  };

  const handleReset = () => {
    setCurrentQuizIndex(0);
    setCorrectList([]);
  };

  return (
    <CafeRecipeContext.Provider
      value={{
        quiz: CAFE_RECIPE_QUiZ,
        currentQuiz,
        currentQuizIndex,
        correctList,
      }}
    >
      <CafeRecipeActionContext.Provider
        value={{
          handleNextQuiz: handleNextQuestion,
          handleChoiceAnswer,
          handleReset,
        }}
      >
        {children}
      </CafeRecipeActionContext.Provider>
    </CafeRecipeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCafeRecipe = () => {
  const context = useContext(CafeRecipeContext);

  if (!context) {
    throw new Error(
      "useCafeRecipe는 CafeRecipeProvider안에서만 사용할 수 있습니다.",
    );
  }

  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCafeRecipeAction = () => {
  const context = useContext(CafeRecipeActionContext);

  if (!context) {
    throw new Error(
      "useCafeRecipeAction는 CafeRecipeActionProvider안에서만 사용할 수 있습니다.",
    );
  }

  return context;
};
