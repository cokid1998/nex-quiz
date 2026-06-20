export interface Quiz {
  menu: string;
  question: string;
  answer: string;
  choices: string[];
}
export interface RecipeContextType {
  quiz: Quiz[];
  currentQuiz: Quiz;
  currentQuizIndex: number;
  correctList: boolean[];
}
export type RecipeActionContextType = {
  handleNextQuestion: () => void;
  handleChoiceAnswer: (selectedAnswer: string) => void;
  handleReset: () => void;
};
