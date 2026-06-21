import { createContext, useContext, useState, type ReactNode } from "react";
import type { Quiz, QuizContextType, QuizActionContextType } from "@/types";

export function createQuizStore(quizData: Quiz[]) {
  const QuizContext = createContext<QuizContextType | null>(null);
  const QuizActionContext = createContext<QuizActionContextType | null>(null);

  function QuizProvider({ children }: { children: ReactNode }) {
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
    const [correctList, setCorrectList] = useState<boolean[]>([]);

    const currentQuiz = quizData[currentQuizIndex];

    const handleNextQuiz = () => {
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
      <QuizContext.Provider
        value={{
          quiz: quizData, // 퀴즈 데이터
          currentQuiz, // 현재 퀴즈
          currentQuizIndex: currentQuizIndex, // 현재 퀴즈 문제 번호
          correctList, // 정답현황 리스트
        }}
      >
        <QuizActionContext.Provider
          value={{
            handleNextQuiz, // 다음 문제 핸들런
            handleChoiceAnswer,
            handleReset,
          }}
        >
          {children}
        </QuizActionContext.Provider>
      </QuizContext.Provider>
    );
  }

  const useQuiz = () => {
    const context = useContext(QuizContext);

    if (!context)
      throw new Error("useQuiz는 QuizProvider 안에서만 사용할 수 있습니다.");

    return context;
  };

  const useQuizAction = () => {
    const context = useContext(QuizActionContext);

    if (!context)
      throw new Error(
        "useQuizAction는 QuizProvider 안에서만 사용할 수 있습니다.",
      );

    return context;
  };

  return { QuizProvider, useQuiz, useQuizAction };
}
