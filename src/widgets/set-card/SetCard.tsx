import { useState } from "react";
import { ParagraphView } from "../paragraph-view/ParagraphView";
import type { PracticeSet, WordStatus, Mode } from "../../shared/types";

interface Props {
  set: PracticeSet;
  mode: Mode;
  wordStatuses: Record<string, WordStatus>;
  onStatusChange: (id: string, status: WordStatus) => void;
}

function SetProgress({
  set,
  wordStatuses
}: {
  set: PracticeSet;
  wordStatuses: Record<string, WordStatus>;
}) {
  const wrongWords = set.words.flat().filter((w) => w.isWrong);
  const corrected = wrongWords.filter(
    (w) => wordStatuses[w.id] === "correct"
  ).length;
  const total = wrongWords.length;
  const percent = total === 0 ? 100 : Math.round((corrected / total) * 100);

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-green-400 to-emerald-400 rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-xs font-bold text-gray-400 shrink-0">
        <span className="text-green-500">
          {corrected}/{total}
        </span>{" "}
        ({percent}%)
      </span>
    </div>
  );
}

export function SetCard({ set, mode, wordStatuses, onStatusChange }: Props) {
  const [hintFlash, setHintFlash] = useState(false);

  function handleHint() {
    if (hintFlash) return;
    setHintFlash(true);
    setTimeout(() => setHintFlash(false), 1000);
  }

  return (
    <div className="flex flex-col gap-3">
      {/* 상단: 안내 + 프로그레스바 */}
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <SetProgress set={set} wordStatuses={wordStatuses} />
        </div>
        {mode === "levelup" && (
          <button
            onClick={handleHint}
            disabled={hintFlash}
            className="px-3 py-2 rounded-full text-md font-bold bg-amber-200 text-amber-600 hover:bg-amber-300 transition-colors cursor-pointer disabled:opacity-50"
          >
            힌트 보기
          </button>
        )}
      </div>

      {/* 본문: 원문 + 제시문 나란히 */}
      <div className="flex flex-col gap-3 lg:flex-row lg:gap-4">
        {/* 원문 */}
        <div className="lg:w-2/5 shrink-0 bg-amber-50 rounded-3xl shadow-md p-5">
          <div className="flex flex-col gap-3">
            {set.original.map((line, i) => (
              <p
                key={i}
                className="text-2xl font-black text-gray-800 py-1.5 leading-none"
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* 제시문 */}
        <div className="flex-1 bg-white rounded-3xl shadow-md p-5">
          <ParagraphView
            set={set}
            mode={mode}
            wordStatuses={wordStatuses}
            onStatusChange={onStatusChange}
            hintFlash={hintFlash}
          />
        </div>
      </div>
    </div>
  );
}
