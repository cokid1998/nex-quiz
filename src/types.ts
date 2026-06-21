export interface Quiz {
  menu: string;
  question: string;
  answer: string;
  choices: string[];
}
export interface QuizContextType {
  quiz: Quiz[];
  currentQuiz: Quiz;
  currentQuizIndex: number;
  correctList: boolean[];
}
export type QuizActionContextType = {
  handleNextQuiz: () => void;
  handleChoiceAnswer: (selectedAnswer: string) => void;
  handleReset: () => void;
};
