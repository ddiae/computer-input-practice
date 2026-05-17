import { WordBlock } from '../../features/word-input/WordBlock';
import type { PracticeSet, WordStatus, Mode } from '../../shared/types';

interface Props {
  set: PracticeSet;
  mode: Mode;
  wordStatuses: Record<string, WordStatus>;
  onStatusChange: (id: string, status: WordStatus) => void;
  hintFlash?: boolean;
}

export function ParagraphView({ set, mode, wordStatuses, onStatusChange, hintFlash = false }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {set.words.map((line, lineIdx) => (
        <div key={lineIdx} className="flex flex-wrap gap-2 items-center">
          {line.map((word) => (
            <WordBlock
              key={word.id}
              word={word}
              status={wordStatuses[word.id] ?? 'idle'}
              mode={mode}
              onStatusChange={onStatusChange}
              hintFlash={hintFlash}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
