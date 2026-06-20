import { create, type StateCreator } from "zustand";
import type { Quiz } from "@/types";
import {
  CAFE_RECIPE_QUiZ,
  DISCOUNT_QUIZ,
  MENU_RECIPE_QUIZ,
} from "@/constants/Recipe";

interface MenuSlice {
  menuQuiz: Quiz[];
  menuCurrentQuiz: Quiz;
  menuCurrentQuizIndex: number;
  menuCorrectList: boolean[];
  menuHandleNextQuiz: () => void;
  menuHandleChoiceAnswer: (selectedAnswer: string) => void;
  menuHandleReset: () => void;
}

interface CafeSlice {
  cafeQuiz: Quiz[];
  cafeCurrentQuiz: Quiz;
  cafeCurrentQuizIndex: number;
  cafeCorrectList: boolean[];
  cafeHandleNextQuiz: () => void;
  cafeHandleChoiceAnswer: (selectedAnswer: string) => void;
  cafeHandleReset: () => void;
}

interface DiscountSlice {
  discountQuiz: Quiz[];
  discountCurrentQuiz: Quiz;
  discountCurrentQuizIndex: number;
  discountCorrectList: boolean[];
  discountHandleNextQuiz: () => void;
  discountHandleChoiceAnswer: (selectedAnswer: string) => void;
  discountHandleReset: () => void;
}

interface Store extends MenuSlice, CafeSlice, DiscountSlice {}

const createMenuSlice: StateCreator<Store, [], [], MenuSlice> = (set, get) => ({
  menuQuiz: MENU_RECIPE_QUIZ,
  menuCurrentQuizIndex: 0,
  menuCurrentQuiz: MENU_RECIPE_QUIZ[0],
  menuCorrectList: [],
  menuHandleNextQuiz: () => {
    set((prev) => ({
      menuCurrentQuiz: MENU_RECIPE_QUIZ[prev.menuCurrentQuizIndex + 1],
      menuCurrentQuizIndex: prev.menuCurrentQuizIndex + 1,
    }));
  },
  menuHandleChoiceAnswer: (selectedAnswer: string) => {
    const isCorrect = get().menuCurrentQuiz.answer === selectedAnswer;
    set((prev) => ({ menuCorrectList: [...prev.menuCorrectList, isCorrect] }));
  },
  menuHandleReset: () => {
    set({ menuCurrentQuizIndex: 0, menuCorrectList: [] });
  },
});

const createCafeSlice: StateCreator<Store, [], [], CafeSlice> = (set, get) => ({
  cafeQuiz: CAFE_RECIPE_QUiZ,
  cafeCurrentQuizIndex: 0,
  cafeCurrentQuiz: CAFE_RECIPE_QUiZ[0],
  cafeCorrectList: [],
  cafeHandleNextQuiz: () => {
    set((prev) => ({
      cafeCurrentQuiz: CAFE_RECIPE_QUiZ[prev.cafeCurrentQuizIndex + 1],
      cafeCurrentQuizIndex: prev.cafeCurrentQuizIndex + 1,
    }));
  },
  cafeHandleChoiceAnswer: (selectedAnswer: string) => {
    const isCorrect = get().cafeCurrentQuiz.answer === selectedAnswer;
    set((prev) => ({ cafeCorrectList: [...prev.cafeCorrectList, isCorrect] }));
  },
  cafeHandleReset: () => {
    set({ cafeCurrentQuizIndex: 0, cafeCorrectList: [] });
  },
});

const createDiscountSlice: StateCreator<Store, [], [], DiscountSlice> = (
  set,
  get,
) => ({
  discountQuiz: DISCOUNT_QUIZ,
  discountCurrentQuizIndex: 0,
  discountCurrentQuiz: DISCOUNT_QUIZ[0],
  discountCorrectList: [],
  discountHandleNextQuiz: () => {
    set((prev) => ({
      discountCurrentQuiz: DISCOUNT_QUIZ[prev.discountCurrentQuizIndex + 1],
      discountCurrentQuizIndex: prev.discountCurrentQuizIndex + 1,
    }));
  },
  discountHandleChoiceAnswer: (selectedAnswer: string) => {
    const isCorrect = get().discountCurrentQuiz.answer === selectedAnswer;
    set((prev) => ({
      discountCorrectList: [...prev.discountCorrectList, isCorrect],
    }));
  },
  discountHandleReset: () => {
    set({ discountCurrentQuizIndex: 0, discountCorrectList: [] });
  },
});

export const useQuizStore = create<Store>()((...arg) => ({
  ...createMenuSlice(...arg),
  ...createCafeSlice(...arg),
  ...createDiscountSlice(...arg),
}));
