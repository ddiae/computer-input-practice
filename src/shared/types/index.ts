export type Mode = 'normal' | 'levelup';

export interface WordUnit {
  id: string;
  text: string;
  answer: string;
  isWrong: boolean;
}

export interface PracticeSet {
  id: number;
  original: string[];
  words: WordUnit[][];
  keysCovered?: string[];
}

export type WordStatus = 'idle' | 'input' | 'correct' | 'wrong';
