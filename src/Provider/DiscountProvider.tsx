import { DISCOUNT_QUIZ } from "@/constants/Recipe";
import type { RecipeActionContextType, RecipeContextType } from "@/types";
import { createContext, useContext, useState, type ReactNode } from "react";

const DiscountContext = createContext<RecipeContextType | null>(null);
const DiscountActionContext = createContext<RecipeActionContextType | null>(
  null,
);

export default function DiscountProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [correctList, setCorrectList] = useState<boolean[]>([]);

  const currentQuiz = DISCOUNT_QUIZ[currentQuizIndex];

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
    <DiscountContext.Provider
      value={{
        quiz: DISCOUNT_QUIZ,
        currentQuiz,
        currentQuizIndex: currentQuizIndex,
        correctList,
      }}
    >
      <DiscountActionContext.Provider
        value={{
          handleChoiceAnswer,
          handleNextQuestion,
          handleReset,
        }}
      >
        {children}
      </DiscountActionContext.Provider>
    </DiscountContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useDiscount = () => {
  const context = useContext(DiscountContext);

  if (!context)
    throw new Error(
      "useDiscount는 DiscountProvider안에서만 사용할 수 있습니다.",
    );

  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDiscountAction = () => {
  const context = useContext(DiscountActionContext);

  if (!context)
    throw new Error(
      "useDiscountAction는 DiscountActionProvider안에서만 사용할 수 있습니다.",
    );

  return context;
};
