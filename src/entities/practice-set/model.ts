import type { Mode, PracticeSet, WordStatus } from '../../shared/types';
import { normalSets } from '../../shared/data/normalSets';
import { levelupSets } from '../../shared/data/levelupSets';

export interface PracticeState {
  mode: Mode;
  sets: PracticeSet[];
  currentSetIndex: number;
  wordStatuses: Record<string, WordStatus>;
}

const SESSION_KEY = 'keyboard-practice-state';

export function initState(mode: Mode): PracticeState {
  const sets = mode === 'normal' ? normalSets : levelupSets;
  const wordStatuses: Record<string, WordStatus> = {};

  for (const set of sets) {
    for (const line of set.words) {
      for (const word of line) {
        wordStatuses[word.id] = 'idle';
      }
    }
  }

  const state: PracticeState = { mode, sets, currentSetIndex: 0, wordStatuses };
  saveState(state);
  return state;
}

export function loadState(): PracticeState | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as PracticeState) : null;
  } catch {
    return null;
  }
}

export function saveState(state: PracticeState): void {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(state));
}

export function clearState(): void {
  sessionStorage.removeItem(SESSION_KEY);
}

export function isSetComplete(set: PracticeSet, wordStatuses: Record<string, WordStatus>): boolean {
  return set.words.flat().every((w) => !w.isWrong || wordStatuses[w.id] === 'correct');
}
